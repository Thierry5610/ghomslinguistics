import { Outlet } from "react-router";
import BottomNav from "./components/BottomNav";
import SideNav from "./components/SideNav";
import  './styles/styles.css'

export default function Admin() {
    return(
        <div className="p-6 h-screen flex items-start bg-stone-100">
            <SideNav/>
                <Outlet/>
            <BottomNav/>
        </div>
    )
}

