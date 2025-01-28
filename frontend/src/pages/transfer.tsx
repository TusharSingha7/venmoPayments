import { useState } from "react";
import AppBar from "../components/appBar";
import Credit from "../components/credit";
import Upi from "../components/upi";
export default function Transfer(){
    const [compo,setCompo] = useState<JSX.Element>(<>
        <div className="flex flex-col min-h-full items-center justify-center font-bold">
            Select An Option
        </div>
    </>);
    return (
      <div className=" bg-gray-200 overflow-hidden min-h-screen">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
                <div className="sm:col-span-7 col-span-10 flex flex-col p-2 h-fit sm:min-h-full">
                    <div className="text-3xl text-purple-600">Transfer</div>
                    <div className="flex mt-2 flex-wrap">
                        <button className="bg-white rounded-full px-2 mr-2 text-sm my-1">Deposit</button>
                        <button className="bg-white rounded-full px-2 mr-2 text-sm my-1">Withdraw</button>
                        <button className="bg-white rounded-full px-2 mr-2 text-sm my-1">Transfer</button>
                    </div>
                    <div className="grid grid-cols-7 min-w-full flex flex-col bg-white rounded-lg my-3 p-2 shadow">
                        <div className="min-h-full col-span-3 bg-blue-300 rounded-sm flex flex-col gap-2 min-w-24">
                            <div className="font-bold border-b pl-2 border-slate-500">Payments Options</div>
                            <button className="font-bold border-b pl-2 border-slate-500 flex" onClick={()=>{
                                setCompo(<Upi/>);
                            }}>Upi options</button>
                            <button className="font-bold border-b pl-2 border-slate-500 flex" onClick={()=>{
                                setCompo(<Credit/>);
                            }}>Credit Atm/Debit</button>
                            <button className="font-bold border-b pl-2 border-slate-500 flex">Net Banking</button>
                        </div>
                        <div className="min-h-full col-span-4 rounded-sm flex flex-col gap-2">
                            {compo}
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-3 min-h-full flex-col sm:pt-20 px-2 col-span-10 sm:mt-2">
                    <div className="bg-white rounded-lg p-2 mt-1 shadow">
                        INR Balance
                    </div>
                    <div className="bg-white rounded-lg p-2 mt-1 shadow">
                        Funding Limits
                    </div>
                    <div className="bg-white rounded-lg p-2 mt-1 shadow">
                        Recent Transactions
                    </div>
                </div>
        </div>
      </div>
    );
}