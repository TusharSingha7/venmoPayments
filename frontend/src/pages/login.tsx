import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { BACKEND_URL } from "../config";
export default function Login(){
        const nav = useNavigate();
        const [inp,setInp] = useState<string>("");
        const responseGoogle = async (authResult : any)=>{
            try{
                if(authResult['code']) {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/user/auth?code=${authResult['code']}`);
                    console.log(response);
                    const token = response.data;
                    localStorage.setItem('token',token);
                    nav('/home');
                }
            }
            catch(err){
                console.log(err);
                alert(err);
            }
        }
        const googleLogin = useGoogleLogin({
            onSuccess : responseGoogle,
            onError: responseGoogle,
            flow : 'auth-code'
        })
        return <div className="grid grid-rows-10 grid-cols-10 min-h-screen">
            <div className="col-start-4 col-end-8 row-start-3 row-end-9 grid overflow-hidden p-4 rounded-lg shadow">
                <div className="flex justify-center text-blue-500 font-extrabold text-2xl italic">
                    Venmo
                </div>
                <div className="flex justify-center">
                    Login
                </div>
                <div className="flex justify-center">
                    <input onChange={(e)=>{
                        setInp(e.target.value);
                    }} className="w-full lg:mx-20 my-2 rounded-lg px-2 border border-slate-400" placeholder={"enter email"}></input>
                </div>
                <div className="flex justify-center">
                    <button onClick={()=>{
                        nav('/login/verify/?usern=' + inp);
                    }} className="w-full lg:mx-20 bg-blue-500 my-2 rounded-full text-white">{"Next"}</button>
                </div>
                <div className="flex justify-center">
                    <button onClick={()=>{
                        nav('/signup');
                    }} className="w-full lg:mx-20 bg-white my-2 rounded-full border-2 border-blue-500 text-blue-500">{"Signup"}</button>
                </div>
                <div className="flex justify-center">
                    <button onClick={googleLogin} className="w-full lg:mx-20 bg-white my-2 rounded-full border-2 border-blue-500 text-blue-500">{"Login with Google"}</button>
                </div>
            </div>
        </div>
}