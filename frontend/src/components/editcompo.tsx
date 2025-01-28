import { useState } from "react"

export default function EditCompo({title,data} : {title : string,data:string}){
    const [view,setView] = useState(true);
    const [tdata,setData] = useState(data);
    return <div className="flex justify-start">
        <div className="flex mx-2 w-28 text-sm text-slate-600">{title}</div>
        <div className="flex justify-between w-full">
            {view == true ? <Spn data={tdata} onclick={()=>{
                setView(false);
            }}/> : <NSpn data={tdata} onclick={()=>{
                setView(true);
            }} setter={(val)=>{
                setData(val);
                setView(true);
            }}/>}
        </div>
    </div>
}
function Spn({data,onclick} : {data : string,onclick : React.MouseEventHandler<HTMLButtonElement> | undefined}){
    return  <>
    <span className="ml-2">{data}</span>
    <button className="mr-2 text-purple-800 text-sm font-bold" onClick={onclick}>Edit</button>
    </>
}
function NSpn({data,onclick,setter} : {data : string,onclick : React.MouseEventHandler<HTMLButtonElement> | undefined,
    setter : React.Dispatch<React.SetStateAction<string>>
}){
    const [val,setVal] = useState(data);
    return <>
    <input defaultValue={val} autoFocus onChange={(e)=>{
        setVal(e.target.value);
    }}/>
    <span>
        <button className="mr-2 text-purple-800 text-sm font-bold" onClick={()=>{setter(val)}}>save</button>
        <button className="mr-2 text-red-800 text-sm font-bold" onClick={onclick}>cancel</button>
    </span>
    </>
}