import { useState } from "react";
import axios from "axios";
import AppBar from "../components/appBar";
import { BACKEND_URL } from "../config";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Transfer() {
  const [bank, setBank] = useState<string>("HDFC");
  const [amt, setAmt] = useState<string>("0");

  const handleAddMoney = async () => {
    if (Number(amt) < 5) {
      alert("Amount should be greater than 4");
      return;
    }

    if (bank === "Razor") {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/razorpay-order-create`, {
          amount: Number(amt),
        });

        if (response.data && response.data.order) {
          const orderData = response.data.order;

          const options = {
            key: "rzp_test_k7XNTgW8eXjL0n",
            amount: orderData.amount,
            currency: orderData.currency,
            order_id: orderData.id,
            name: "PayNow",
            description: "Payment Transaction",
            handler: function (res: any) {
              alert("Payment Successful! Payment ID: " + res.razorpay_payment_id);
              axios.post(`${BACKEND_URL}/api/v1/user/verify-payment`, res)
                .then((res) => console.log("Payment Verified:", res.data))
                .catch((err) => console.error("Payment Verification Failed", err));
            },
            prefill: {
              name: "John Doe",
              email: "johndoe@example.com",
              contact: "9999999999",
            },
            theme: {
              color: "#3399cc",
            },
            modal: {
              ondismiss: function () {
                alert("Payment Cancelled!");
              },
            },
          };

          if (window.Razorpay) {
            const razor = new window.Razorpay(options);
            razor.open();
          } else {
            alert("Razorpay SDK not loaded");
          }
        }
      } catch (err) {
        console.error(err);
        alert("Error creating payment. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gray-200 overflow-hidden min-h-screen flex flex-col">
      <AppBar />
      <div className="text-purple-400 text-4xl p-2 font-bold ml-2">Transfer</div>
      <div className="sm:grid sm:grid-cols-10 flex-grow">
        <div className="sm:col-span-5 p-5">
          <div>
            <div className="font-bold text-xl">Amount</div>
            <input
              type="number"
              className="rounded w-full my-2 h-8 p-1"
              min={5}
              onChange={(e) => {
                setAmt(e.target.value);
              }}
            />
            <div className="font-bold">Select Bank</div>
            <select
              className="w-full my-2 h-8 rounded"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
            >
              <option value="HDFC">HDFC</option>
              <option value="Axis">Axis Bank</option>
              <option value="Razor">Razor Pay</option>
            </select>
            <br />
            <div className="my-2 flex">
              <button className="mx-auto bg-slate-400 rounded p-2" onClick={handleAddMoney}>
                Add Money
              </button>
            </div>
          </div>
        </div>
        <div className="sm:col-span-5 flex flex-col p-5">
          <div>
            <div className="font-bold text-xl">Balance</div>
            <div className="flex justify-between border-b border-b-black p-1">
              <span>Unblocked balance</span>
              <span>INR0</span>
            </div>
            <div className="flex justify-between border-b border-b-black p-1">
              <span>Total Locked balance</span>
              <span>INR0</span>
            </div>
            <div className="flex justify-between border-b border-b-black p-1">
              <span>Total balance</span>
              <span>INR0</span>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-xl font-bold">Recent Transactions</div>
            <div className="flex justify-center mt-5">
              <span>No recent transactions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
