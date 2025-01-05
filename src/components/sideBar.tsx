import homesym from '../icons/home.png'
import searchsym from '../icons/search-interface-symbol.png'
import clocksym from '../icons/clock.png'
import transfersym from '../icons/transfer.png'
import percentsym from '../icons/percentage.png'
import { useNavigate } from "react-router-dom";
export default function SideBar(){
        const nav = useNavigate();
    return <div className="flex flex-col align-center mt-12 gap-3 text-slate-500 font-semibold">
        <div className="flex justify-center">
            <button className='flex items-center justify-start w-full pl-4' onClick={()=>{
                nav('/home')
            }}><img className='h-5 w-5 mx-2' src={homesym}></img> Home</button>
        </div>
        <div className="flex justify-center">
            <button className='flex items-center justify-start w-full pl-4' onClick={()=>{
                nav('/explore')
            }}><img className='h-5 w-5 mx-2' src={searchsym}></img>Explore</button>
        </div>
        <div className="flex justify-center">
            <button className='flex items-center justify-start w-full pl-4' onClick={()=>{
                nav('/rewards')
            }}><img className='h-5 w-5 mx-2' src={percentsym}></img>Rewards</button>
        </div>
        <div className="flex justify-center">
            <button className='flex items-center justify-start w-full pl-4' onClick={()=>{
                nav('/transfer')
            }}><img className='h-5 w-5 mx-2' src={transfersym}></img>Transfer</button>
        </div>
        <div className="flex justify-center">
            <button className='flex items-center justify-start w-full pl-4' onClick={()=>{
                nav('/transaction')
            }}><img className='h-5 w-5 mx-2' src={clocksym}></img>Transaction</button>
        </div>
    </div>
}