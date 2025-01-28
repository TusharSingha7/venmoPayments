import { useState } from "react";
export default function Upi(){
    const [num,setNum] = useState<string>("");
    const [name,setName] = useState("");
    return <div className="flex flex-col px-2 gap-3">
        <div className="text-sm font-bold">Enter Upi Id</div>
        <input className="bg-white border rounded-sm pl-2" placeholder="Enter card number" onChange={(e)=>{
            setNum(e.target.value);
        }}></input>
        <div className="text-sm font-bold">Enter Amount</div>
        <input className="bg-white border rounded-sm pl-2" placeholder="Enter Your Name Here" onChange={(e)=>{
            setName(e.target.value);
        }}></input>
        <button className="min-w-full rounded-full bg-blue-800 text-white border" onClick={()=>{
            console.log(num);
            console.log(name);
        }}>Pay Now</button>
    </div>
}