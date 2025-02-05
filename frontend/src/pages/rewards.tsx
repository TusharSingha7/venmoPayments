

import AppBar from "../components/appBar";

export default function Rewards(){
    return (
      <div className="min-h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
          <div className="col-span-10 border-l border-l-slate-600 pl-2 pt-2 text-3xl text-purple-600">
            Rewards
          </div>
        </div>
      </div>
    );
}
