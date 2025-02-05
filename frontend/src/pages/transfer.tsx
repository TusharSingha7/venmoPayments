import AppBar from "../components/appBar";

export default function Transfer() {
  return (
    <div className="bg-gray-200 overflow-hidden min-h-screen flex flex-col">
      <AppBar />
      <div className="text-purple-400 text-4xl p-2 font-bold ml-2">Transfer</div>
      <div className="sm:grid sm:grid-cols-10 flex-grow">
        <div className="sm:col-span-5 p-5">
          <div>
            <div className="font-bold text-xl">Amount</div>
            <input type="number" className="rounded w-full my-2 h-8"/>
            <div className="font-bold">Select Bank</div>
            <select className="w-full my-2 h-8 rounded">
              <option value="hdfc">HDFC</option>
              <option value="axis">Axis Bank</option>
            </select><br />
            <div className="my-2 flex">
                <button className="mx-auto bg-slate-400 rounded p-2">Add Money</button>
            </div>
          </div>
        </div>
        <div className="sm:col-span-5 flex flex-col p-5">
          <div>
            <div className="font-bold text-xl">Balance</div>
            <div className="flex justify-between border-b border-b-black p-1"><span>Unblocked balance</span><span>INR0</span></div>
            <div className="flex justify-between border-b border-b-black p-1"><span>Total Locked balance</span><span>INR0</span></div>
            <div className="flex justify-between border-b border-b-black p-1"><span>Total balance</span><span>INR0</span></div>
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
