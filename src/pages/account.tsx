import AppBar from "../components/appBar";
import SideBar from "../components/sideBar";

export default function Account(){
    return (
      <div className="h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
          <div className="col-start-1 col-end-3">
            <SideBar />
          </div>
          <div className="col-start-3 col-end-11 border-l border-l-slate-600 pl-2 pt-2">
            Account
          </div>
        </div>
      </div>
    );
}
