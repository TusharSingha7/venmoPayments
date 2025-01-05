import AppBar from "../components/appBar";
import SideBar from "../components/sideBar";
import calendersym from '../icons/calender.png'
export default function Home(){
    const data = {
      name : "Tushar Singh"
    }
    return (
      <div className="h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
          <div className="col-start-1 col-end-3">
            <SideBar />
          </div>
          <div className="grid grid-cols-10 col-start-3 col-end-11 border-l border-l-slate-600">
              <div className="min-h-full col-span-7 flex flex-col p-2">
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
              <div className="col-span-3 min-h-full flex-col pt-16 px-2">
                  <div className="bg-white rounded-lg p-2 mt-2 shadow">
                    <div className="flex justify-center">
                      <img className="w-28 h-28" src={calendersym}></img>
                    </div>
                    <div className="font-bold">Set up recurring buys</div>
                    <div className="text-slate-500 text-sm">Schedule regular crypto purchases to balance market fluctuations</div>
                    <button className="flex justify-center text-purple-800 min-w-full mr-2 my-2 pb-0.5 rounded-full bg-purple-300 items-center font-bold">Get started</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
}
