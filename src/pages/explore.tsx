
import AppBar from "../components/appBar";
export default function Explore(){
    return (
      <div className="h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
          <div className="col-span-10 border-l border-l-slate-600 pl-2 pt-2 text-3xl text-purple-600">
            Explore
          </div>
        </div>
      </div>
    );
}
