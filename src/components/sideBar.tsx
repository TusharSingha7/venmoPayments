
import { useNavigate } from "react-router-dom";
export default function SideBar(){
        const nav = useNavigate();
    return <div className="flex flex-col align-center mt-12 gap-3 text-slate-500 font-semibold">
        <div className="flex justify-center">
            <button onClick={()=>{
                nav('/home')
            }}>Home</button>
        </div>
        <div className="flex justify-center">
            <button onClick={()=>{
                nav('/explore')
            }}>Explore</button>
        </div>
        <div className="flex justify-center">
            <button onClick={()=>{
                nav('/rewards')
            }}>Rewards</button>
        </div>
        <div className="flex justify-center">
            <button onClick={()=>{
                nav('/account')
            }}>Account</button>
        </div>
        <div className="flex justify-center">
            <button onClick={()=>{
                nav('/transaction')
            }}>Transaction</button>
        </div>
    </div>
}