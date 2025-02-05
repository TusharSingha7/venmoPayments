
import grid from '../icons/grid.png'
import prof from '../icons/user.png'
import halfc from '../icons/half-circle.png'
import menusym from '../icons/menu.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SideBar from './sideBar'
import Dropdown from './dropdown'
export default function AppBar(){
   const nav = useNavigate();
   const [view,setView] = useState(false);
   const [dview,dsetView] = useState(false);
    return <>
    {view == true ? <SideBar onclick={()=>{
        setView(false);
    }}/> : <div></div>}
    {dview ? <Dropdown/> : <div/>}
    <div className="flex justify-between p-2 border-b border-b-slate-500 sticky top-0 z-10">
     <div className="flex justify-start ml-2">
        <button onClick={()=>{
            setView(true);
        }}>
            <img src={menusym} className='h-8 w-8 mr-5'></img>
        </button>
        <button onClick={()=>{
            nav('/home');
        }} className='flex'><img src={halfc} className='w-12 h-12'></img>
        <span className='pt-3'>KRAKEN</span>
        </button>
     </div>
     <div className="mr-2 gap-2 hidden sm:flex">
        <button onClick={()=>{
            dsetView(!dview);
        }}><img src={grid} className="p-2 w-10 h-10"></img></button>
        <button onClick={()=>{
            nav('/account');
        }}><img src={prof} className="p-2 w-10 h-10"></img></button>
     </div>
    </div>
    </>
}