import homesym from '../icons/home.png'
import clocksym from '../icons/clock.png'
import transfersym from '../icons/transfer.png'
import closesym from '../icons/close.png'
import { useNavigate } from "react-router-dom";
export default function SideBar( {onclick} : {onclick : React.MouseEventHandler<HTMLButtonElement> | undefined}){
    const nav = useNavigate();
    return <div className='absolute z-20 h-screen top-0 left-0 w-screen flex'>
    <div className="bg-gray-200 shadow-xl shadow pr-3 min-w-44 min-h-full">
        <div className='flex justify-end'>
            <button onClick={onclick}>
            <img src={closesym} className='h-5 w-5 mt-5 mb-12'></img>
            </button>
        </div>
        <div className="flex flex-col align-center gap-3 text-slate-500 font-semibold">
        <div className="flex justify-center">
            <button className='flex items-center justify-start w-full pl-4' onClick={()=>{
                nav('/home')
            }}><img className='h-5 w-5 mx-2' src={homesym}></img> Home</button>
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
    </div>
    <button className='w-full h-full hover:cursor-default' onClick={onclick}></button>
    </div>
}