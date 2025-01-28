
import secsym from '../icons/security.png'
import setsym from '../icons/settings.png'
import paysym from '../icons/payment.png'
import docsym from '../icons/google-docs.png'
import exitsym from '../icons/exit.png'
import dbmssym from '../icons/server.png'
import { useNavigate } from 'react-router-dom'
export default function Dropdown(){
    const nav = useNavigate();
    return <div className="shadow bg-white absolute top-16 right-28 flex flex-col w-42 z-10 p-2 rounded rounded-md hidden sm:flex">
        <button className="flex items-center py-2" onClick={()=>{
            nav('/account');
        }}><img src={setsym} className='w-5 h-5 mr-1'/>Settings</button>
        <button onClick={()=>{
            nav('/account');
        }} className="flex items-center py-2"><img src={secsym} className='w-5 h-5 mr-1'/>security</button>
        <button className="whitespace-nowrap flex items-center py-2" onClick={()=>{
            nav('/transfer');
        }}><img src={paysym} className='w-5 h-5 mr-1'/>payment methods</button>
        <button className="flex items-center py-2" onClick={()=>{
            nav('/account');
        }}><img src={docsym} className='w-5 h-5 mr-1'/>documents</button>
        <button className="whitespace-nowrap flex items-center py-2" onClick={()=>{
            nav('/account');
        }}><img src={dbmssym} className='w-5 h-5 mr-1'/>proof of reserves</button>
        <button className="border border-0 border-t border-slate-400 flex items-center py-2" onClick={()=>{
            nav('/');
        }}><img src={exitsym} className='w-5 h-5 mr-1'/>Signout</button>
    </div>
}