
import grid from '../icons/grid.png'
import qmark from '../icons/interrogation.png'
import prof from '../icons/user.png'
import halfc from '../icons/half-circle.png'
import { useNavigate } from 'react-router-dom'
export default function AppBar(){
   const nav = useNavigate();
    return <>
    <div className="flex justify-between p-2 border-b border-b-slate-500">
     <div className="flex justify-start ml-2">
        <button onClick={()=>{
            nav('/home');
        }} className='flex'><img src={halfc} className='w-12 h-12'></img><span className='pt-3'>KRAKEN</span></button>
     </div>
     <div className="flex mr-2 gap-2">
        <button className="bg-purple-500 rounded-full px-3 mb-2 mt-2 text-white flex items-center">Buy crypto</button>
        <button><img src={grid} className="p-2 w-10 h-10"></img></button>
        <button><img src={qmark} className="p-2 w-10 h-10"></img></button>
        <button onClick={()=>{
            nav('/account');
        }}><img src={prof} className="p-2 w-10 h-10"></img></button>
     </div>
    </div>
    </>
}