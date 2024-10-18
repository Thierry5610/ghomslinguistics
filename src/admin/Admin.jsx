import BottomNav from "./components/BottomNav";
import SideNav from "./components/SideNav";

export default function Admin() {
    return(
        <div className="p-6 h-screen">
            <SideNav/>
            <BottomNav/>
        </div>
    )
}

