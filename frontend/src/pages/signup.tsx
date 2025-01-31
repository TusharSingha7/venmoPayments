
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
export default function SignUp(){
    const nav = useNavigate();
        const [email,setEmail] = useState<string>("");
        const [pass,setPass] = useState<string>("");
        const [pass2,setPass2] = useState<string>("");
        const [name,setName] = useState<string>("");
        return <div className="grid grid-rows-10 grid-cols-10 min-h-screen">
            <div className="col-start-4 col-end-8 row-start-2 row-end-10 grid overflow-hidden p-4 rounded-lg shadow">
                <div className="flex justify-center text-blue-500 font-extrabold text-2xl italic">
                    Venmo
                </div>
                <div className="flex justify-center">
                    SignUp
                </div>
                <div className="flex justify-center">
                    Already have an account ?
                    <Link to={'/login'} className="text-blue-500 pl-2">Login</Link>
                </div>
                <div className="flex justify-center">
                    <input onChange={(e)=>{
                        setName(e.target.value);
                    }} className="w-full lg:mx-20 my-2 rounded-lg px-2 border border-slate-400" placeholder={"Enter Name"}></input>
                </div>
                <div className="flex justify-center">
                    <input onChange={(e)=>{
                        setEmail(e.target.value);
                    }} className="w-full lg:mx-20 my-2 rounded-lg px-2 border border-slate-400" placeholder={"Enter Email"}></input>
                </div>
                <div className="flex justify-center">
                    <input onChange={(e)=>{
                        setPass(e.target.value);
                    }} className="w-full lg:mx-20 my-2 rounded-lg px-2 border border-slate-400" placeholder={"Enter Password"}></input>
                </div>
                <div className="flex justify-center">
                    <input onChange={(e)=>{
                        setPass2(e.target.value);
                    }} className="w-full lg:mx-20 my-2 rounded-lg px-2 border border-slate-400" placeholder={"Confirm Password"}></input>
                </div>
                <div className="flex justify-center">
                    <button onClick={async ()=>{
                        if(pass != pass2){
                            alert("password doesnot match");
                        }
                        else {
                            try{
                                const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                                    data : {
                                        name : name,
                                        email : email,
                                        password : pass
                                    }
                                });
                                if(!response) alert("Retry");
                                else nav('/login');
                            }
                            catch(err) {
                                alert(err);
                            }
                        }
                    }} className="w-full lg:mx-20 bg-blue-500 my-2 rounded-full text-white">SignUp</button>
                </div>
            </div>
        </div>
}