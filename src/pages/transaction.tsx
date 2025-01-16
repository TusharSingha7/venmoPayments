
import AppBar from "../components/appBar";

export default function Transaction(){
    return (
      <div className="min-h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
          <div className="flex flex-col gap-3 col-span-10 border-l border-l-slate-600 pl-2 pt-2 mr-2">
            <div className="text-3xl text-purple-600">Transaction</div>
            <div className="bg-white min-h-full rounded-lg gap-2 p-2">
                <div>Render List Here</div>
                <div>Render List Here</div>
                <div>Render List Here</div>
            </div>
          </div>
        </div>
      </div>
    );
}
