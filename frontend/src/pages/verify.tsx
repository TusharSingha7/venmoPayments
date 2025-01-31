import axios from "axios";
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
export default function Verify(){
        const nav = useNavigate();
        const [inp,setInp] = useState<string>("");
        const [param] = useSearchParams();
        const username = param.get('usern');
        return <div className="grid grid-rows-10 grid-cols-10 min-h-screen">
            <div className="col-start-4 col-end-8 row-start-3 row-end-9 grid overflow-hidden p-4 rounded-lg shadow">
                <div className="flex justify-center text-blue-500 font-extrabold text-2xl italic">
                    Venmo
                </div>
                <div className="flex justify-center">
                    {username}
                </div>
                <div className="flex justify-center">
                    <input onChange={(e)=>{
                        setInp(e.target.value);
                    }} className="w-full lg:mx-20 my-2 rounded-lg px-2 border border-slate-400" placeholder={"enter password"}></input>
                </div>
                <div className="flex justify-center">
                    <button onClick={async ()=>{
                        //verify from backend
                        try{
                            const response = await axios.get(`${BACKEND_URL}/api/v1/user/verify`,{
                                data : {
                                    email : username,
                                    password : inp
                                }
                            });
                            if(response){
                                const token = response.data.token;
                                localStorage.setItem('token',token);
                                nav('/home');
                            }
                            else alert("failed");
                        }
                        catch(err) {
                            alert(err);
                        }
                    }} className="w-full lg:mx-20 bg-blue-500 my-2 rounded-full text-white">{"Next"}</button>
                </div>
                <div className="flex justify-center">
                    <button onClick={()=>{
                        nav('/login');
                    }} className="w-full lg:mx-20 bg-white my-2 rounded-full border-2 border-blue-500 text-blue-500">{"Change"}</button>
                </div>
            </div>
        </div>
}