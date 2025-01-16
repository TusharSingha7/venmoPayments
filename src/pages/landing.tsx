import vsym from '../icons/vimeo.png'
import hero from '../icons/home-hero.png'
import { useNavigate } from 'react-router-dom'
export default function Landing(){
    const nav = useNavigate();
    return <div>
        <div className="flex justify-between px-3 p-2 shadow sticky top-0 bg-white z-10">
            <div className="flex italic text-2xl text-blue-500 font-extrabold">
                Venmo
            </div>
            <div className="flex justify-end">
                <button className="px-2" onClick={()=>{
                    nav('/login');
                }}>Login</button>
                <button className="px-2 flex items-center border border-slate-500 rounded-full"><img className='h-4 w-5 px-1' src={vsym}></img>Merchant Login</button>
            </div>
        </div>
        <div className='grid grid-rows-12 grid-cols-10 min-h-screen z-0'>
            <div className='col-start-2 col-end-8 row-start-2 row-end-13 bg-blue-200 rounded-2xl'>
            </div>
            <div className='col-start-2 col-span-3 row-start-4 row-span-3 md:text-6xl sm:text-3xl pl-14 font-semibold'>
                Fast, safe social payments
            </div>
            <div className='col-start-2 col-span-3 row-start-10 md:row-start-8 md:pt-4 pl-14 text-slate-600'>
                Pay, get paid, grow a business, and more. Join the tens of millions of people on vemmo.
            </div>
            <img className='col-start-5 col-span-5 row-start-4' src={hero}></img>
        </div>
    </div>
}