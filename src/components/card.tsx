import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Card({heading,label1,label2,placeholder} : {
    heading? : string,
    label1? : string,
    label2? : string,
    placeholder? : string,
}){
        const nav = useNavigate();
        const [inp,setInp] = useState<string>("");
        return <div className="grid grid-rows-10 grid-cols-10 h-screen">
            <div className="col-start-4 col-end-8 row-start-3 row-end-9 grid overflow-hidden p-4 rounded-lg shadow">
                <div className="flex justify-center text-blue-500 font-extrabold text-2xl italic">
                    Venmo
                </div>
                <div className="flex justify-center">
                    {heading ? heading : "card"}
                </div>
                <div className="flex justify-center">
                    <input onChange={(e)=>{
                        setInp(e.target.value);
                    }} className="w-full lg:mx-20 my-2 rounded-lg px-2 border border-slate-400" placeholder={placeholder ? placeholder : "enter email"}></input>
                </div>
                <div className="flex justify-center">
                    <button onClick={()=>{
                        nav('/home');
                    }} className="w-full lg:mx-20 bg-blue-500 my-2 rounded-full text-white">{label1 ? label1 : "B1"}</button>
                </div>
                <div className="flex justify-center">
                    <button onClick={()=>{
                        nav('/signup');
                        if(inp == ""){}
                    }} className="w-full lg:mx-20 bg-white my-2 rounded-full border-2 border-blue-500 text-blue-500">{label2 ? label2 : "B2"}</button>
                </div>
            </div>
        </div>
}