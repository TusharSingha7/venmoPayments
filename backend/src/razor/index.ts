import Razorpay from "razorpay";
import '../config'
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || "",
    key_secret: process.env.RAZORPAY_KEY_SECRET || ""
});

export default async function createOrder({
    amount
} : {amount : number}){
    try {
        const order = await instance.orders.create({
            amount: amount*100,
            currency: "INR",
            receipt: "receipt#1",
            notes: {
              key1: "value3",
              key2: "value2"
            }
        });
        return order;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}