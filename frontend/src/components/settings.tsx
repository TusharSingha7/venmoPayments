import EditCompo from "./editcompo";


export default function Settings(){
    return <div className="flex flex-col mx-3">
            <div className="bg-white flex flex-col rounded-lg my-2 p-2">
                <div className="font-semibold text-xl ml-2">Personal Info</div>
                <div className="flex flex-col gap-4">
                    <EditCompo title="Legal name" data="Tushar Singh"/>
                    <EditCompo title="Email" data="email@gmail.com"/>
                    <EditCompo title="Country" data="India"/>
                </div>
            </div>
            <div className="bg-white flex flex-col rounded-lg my-2 p-2">
            <div className="font-semibold text-xl ml-2">Preferences</div>
                <div className="flex flex-col gap-4">
                    <EditCompo title="Language" data="English"/>
                    <EditCompo title="Currency" data="Rupees"/>
                    <EditCompo title="Timezone" data="[00:00:00] Kolkata + UTC"/>
                </div>
            </div>
            <div>
        </div>
    </div>
}