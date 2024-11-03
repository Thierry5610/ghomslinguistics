import { Outlet } from "react-router";
import BottomNav from "./components/BottomNav";
import SideNav from "./components/SideNav";
import  './styles/styles.css'
import { User2 } from "lucide-react";

export default function Admin() {
    return(
        <div className="min-h-screen max-w-screen-xl mx-auto flex items-start bg-stone-100">
            <div className="flex w-full min-h-screen">
                <div className="hidden relative md:block w-64 flex-shrink-0"><SideNav/></div>
                <div className="flex-1 overflow-x-hidden items-center justify-center space-y-8 p-6">
                    <Header/>
                    <Outlet/>
                </div>
            </div>
            <BottomNav/>
        </div>
    )
}


function Header() {
    return(
        <div className="flex justify-between items-center w-full">
            <h2 className="gray-800 font-semibold text-2xl">Welcome back Admin 👋</h2>
            <div>
                <div className="bg-gray-200 p-2 rounded-full">
                    <User2 size={24} className="text-gray-700"/>
                </div>
            </div>
        </div>
    )
}
