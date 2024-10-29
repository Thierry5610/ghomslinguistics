import { Outlet } from "react-router";
import BottomNav from "./components/BottomNav";
import SideNav from "./components/SideNav";
import  './styles/styles.css'

export default function Admin() {
    return(
        <div className="min-h-screen max-w-full flex items-start bg-stone-100">
            <div className="flex w-full">
                <div className="hidden md:block w-64 flex-shrink-0"><SideNav/></div>
                <div className="flex-1 overflow-x-hidden items-center justify-center"><Outlet/></div>
            </div>
            <BottomNav/>
        </div>
    )
}

