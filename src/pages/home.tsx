import { useState } from "react";
import AppBar from "../components/appBar";
import Adv0 from "../components/adv0";
import Adv1 from "../components/adv1";
import Adv2 from "../components/adv2";
export default function Home(){
    const [activeDot,setActiveDot] = useState(1);
    const arr : JSX.Element[] = [<Adv0/>,<Adv1/>,<Adv2/>];
    const data = {
      name : "Tushar Singh"
    }
    return (
      <div className="h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
              <div className="min-h-full md:col-span-8 flex flex-col p-2 col-span-10">
                  <div className="pl-2 pt-2 text-3xl text-purple-600 mb-2">Good afternoon, {data.name}</div>
                  <div className="min-w-full flex flex-col bg-white rounded-lg my-3 p-2 shadow">
                    <div>portfolio</div>
                    <div>000</div>
                    <div>graph</div>
                    <div>jan feb</div>
                    <div>buttons</div>
                    <div>buy sell convert buttons</div>
                  </div>
                  <div className="min-w-full flex flex-col bg-white rounded-lg my-3 p-2 shadow">
                      <div>Advertisement</div>
                      <div>Advertisement</div>
                      <div>Advertisement</div>
                  </div>
              </div>
              <div className="md:col-span-2 min-h-full flex-col pt-16 px-2 md:block hidden">
                  {arr[activeDot]}
                  <div className="flex justify-center items-center">
                    <button onClick={()=>{
                      const nval = (activeDot + 2)%3;
                      setActiveDot(nval);
                    }} className="mx-3 rounded-full bg-white w-8 h-8 items-center flex justify-center pb-1">{"<"}</button>
                    <div className={`text-3xl ${activeDot == 0 ? 'text-purple-600' : 'text-white'} pb-5 mx-1`}>.</div>
                    <div className={`text-3xl ${activeDot == 1 ? 'text-purple-600' : 'text-white'} pb-5 mx-1`}>.</div>
                    <div className={`text-3xl ${activeDot == 2 ? 'text-purple-600' : 'text-white'} pb-5 mx-1`}>.</div>
                    <button onClick={()=>{
                      const nval = (activeDot + 1)%3;
                      setActiveDot(nval);
                    }} className="mx-3 rounded-full bg-white w-8 h-8 items-center flex justify-center pb-1">{">"}</button>
                  </div>
              </div>
        </div>
      </div>
    );
}
