import { Power, User2 } from "lucide-react";
import { useNavigate } from "react-router";
import { logOut } from "../../SupabaseServices";

export default function Header({name}) {
    const navigate = useNavigate()
    const tryLogOut = async () => {
        await logOut()
        navigate('/admin')
    }
    return(
        <div className="flex justify-between items-center w-full">
            <h2 className="gray-800 font-semibold text-xl md:text-2xl">Welcome back {name} 👋</h2>
            <div>
                <div className="bg-gray-200 p-2 rounded-full flex gap-2">
                    <User2 size={24} className="text-gray-700"/>
                    <Power size={24}  onClick={tryLogOut} className="text-red-500 hover:text-red-700 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}