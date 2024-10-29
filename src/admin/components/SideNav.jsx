import { LuGraduationCap, LuLayoutGrid, LuNewspaper, LuSettings, LuUsers } from "react-icons/lu"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import { useEffect, useState } from "react"

const SideNav= () => {
    const paths = [
        {
            name: "dashboard",
            icon: <LuLayoutGrid/>
        },
        {
            name: "courses",
            icon: <LuGraduationCap/>
        },
        {
            name: "students",
            icon: <LuUsers/>
        },
        {
            name: "news",
            icon: <LuNewspaper/>
        },
        {
            name: "settings",
            icon: <LuSettings/>
        }
    ]
    return (
        <div className="top-6 left-6 bottom-6 fixed hidden md:flex w-fit p-6 rounded-lg bg-stone-900 flex-col gap-4">
            {/* <Logo/> */}
            {paths.map((path)=>(
                <SideNavItem icon={path.icon} to={path.name} key={path.name} id={path.name+"side"}>{path.name}</SideNavItem>
            ))}
        </div>
    )
}

const SideNavItem = ({children,to,icon,id}) => {
    const [isActive, setIsActive] = useState(false)
    const location = useLocation()
    
    useEffect(() => {
        const el = document.getElementById(id)
    
        if (!el) return // Check if element exists
    
        const elementPath = new URL(el.href).pathname // Extract pathname from href
        const isMatch = elementPath === location.pathname // Directly compare paths
    
        setIsActive(isMatch) // Set state based on match
    }, [location.pathname]) // Trigger only when location changes
    
    return(
        <Link id={id} to={to} className={`text-base transition-all duration-500 flex gap-2 items-center content-start ${!isActive?'hover:bg-stone-800 ': ''} text-stone-200 px-6 py-2 rounded-full ${isActive?'bg-amber-500 capitalize hover:bg-amber-500 text-stone-900 ':''}`}>
            {icon}
            <span>{children}</span>
        </Link>
    )
}

export default SideNav