import { Outlet } from "react-router";
import BottomNav from "./components/BottomNav";
import SideNav from "./components/SideNav";
import  './styles/styles.css'
import Header from "./components/Header";

export default function Admin() {
    return(
        <div className="min-h-screen max-w-screen-xl mx-auto flex items-start bg-stone-100">
            <div className="flex w-full min-h-screen">
                <div className="hidden relative md:block w-64 flex-shrink-0"><SideNav/></div>
                <div className="flex-1 overflow-x-hidden flex flex-col gap-8 p-6">
                    <Header name={"Admin"}/>
                    <Outlet/>
                </div>
            </div>
            <BottomNav/>
        </div>
    )
}

