import { LuGraduationCap, LuLayoutGrid, LuNewspaper, LuSettings, LuUsers } from "react-icons/lu"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const SideNav= () => {
    const {t} = useTranslation("sideNav")
    const paths = [
        {
            name: t("Dashboard"),
            path: "dashboard",
            icon: <LuLayoutGrid/>
        },
        {
            name: t("Courses"),
            path: "courses",
            icon: <LuGraduationCap/>
        },
        {
            name: t("Students"),
            path: "students",
            icon: <LuUsers/>
        },
        {
            name: t("News"),
            path: "news",
            icon: <LuNewspaper/>
        },
        {
            name: t("Settings"),
            path: "settings",
            icon: <LuSettings/>
        }
    ]
    return (
        <div className="top-6 left-6 bottom-6 sticky h-[calc(100vh-3rem)] hidden md:flex w-fit p-6 rounded-lg bg-stone-900 flex-col gap-4">
            {/* <Logo/> */}
            {paths.map((path)=>(
                <SideNavItem icon={path.icon} to={path.path} key={path.path} id={path.path+"side"}>{path.name}</SideNavItem>
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