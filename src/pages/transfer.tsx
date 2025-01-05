import { useState } from "react";
import AppBar from "../components/appBar";
import SideBar from "../components/sideBar";
import Credit from "../components/credit";
import Upi from "../components/upi";
export default function Transfer(){
    const [compo,setCompo] = useState<JSX.Element>(<>
        <div className="flex flex-col min-h-full items-center justify-center font-bold">
            Select An Option
        </div>
    </>);
    return (
      <div className="h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
          <div className="col-start-1 col-end-3">
            <SideBar />
          </div>
          <div className="grid grid-cols-10 col-start-3 col-end-11 border-l border-l-slate-600 pl-2 pt-2">
                <div className="min-h-full col-span-7 flex flex-col p-2">
                    <div className="text-3xl text-purple-600">Transfer</div>
                    <div className="flex mt-2">
                        <button className="bg-white rounded-full px-2 mr-2 text-sm">Deposit</button>
                        <button className="bg-white rounded-full px-2 mr-2 text-sm">Withdraw</button>
                        <button className="bg-white rounded-full px-2 mr-2 text-sm">Transfer</button>
                    </div>
                    <div className="grid grid-cols-7 min-w-full flex flex-col bg-white rounded-lg my-3 p-2 shadow">
                        <div className="min-h-full col-span-3 bg-blue-300 rounded-sm flex flex-col gap-2">
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
                <div className="col-span-3 min-h-full flex-col pt-20 px-2">
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
      </div>
    );
}