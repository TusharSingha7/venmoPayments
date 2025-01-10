import calendersym from '../icons/calender.png'

export default function Adv1(){
    return <div className="bg-white rounded-lg p-2 mt-2 shadow">
                    <div className="flex justify-center">
                      <img className="w-28 h-28" src={calendersym}></img>
                    </div>
                    <div className="font-bold">Set up recurring buys</div>
                    <div className="text-slate-500 text-sm">Schedule regular crypto purchases to balance market fluctuations</div>
                    <button className="flex justify-center text-purple-800 min-w-full mr-2 my-2 pb-0.5 rounded-full bg-purple-300 items-center font-bold">Get started</button>
        </div>
}