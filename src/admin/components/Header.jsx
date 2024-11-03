import { User2 } from "lucide-react";

export default function Header({name}) {
    return(
        <div className="flex justify-between items-center w-full">
            <h2 className="gray-800 font-semibold text-2xl">Welcome back {name} 👋</h2>
            <div>
                <div className="bg-gray-200 p-2 rounded-full">
                    <User2 size={24} className="text-gray-700"/>
                </div>
            </div>
        </div>
    )
}