import { LuGraduationCap, LuLayoutGrid, LuNewspaper, LuSettings, LuUsers } from "react-icons/lu"
import { Link, useLocation} from "react-router-dom"
import {motion} from "framer-motion"
import {useEffect, useRef, useState } from "react"

const BottomNav = () => {
    const [pillPos,setPillPos] = useState({
        left:0,
        width:0,
        height:0,
        opacity:0
    })
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
    return(
        <div className="flex md:hidden border border-stone-500 p-3 rounded-full shadow-md bg-white fixed left-1/2 bottom-[5%] -translate-x-1/2">
            {paths.map((path)=>(
                <BottomNavItem id={path.name} to={path.name} setPill={setPillPos} key={path.name}>{path.icon}</BottomNavItem>
            ))}
            <BottomNavPill options={pillPos}/>
        </div>
    )
}

const BottomNavItem = ({children,to,setPill,id}) => {
    const ref = useRef(null)
    const location = useLocation()
    
    useEffect(() => {
        const el = document.getElementById(id)
        
        if (!el) return // Check if element exists
        
        const elementPath = new URL(el.href).pathname // Extract pathname from href
        const isMatch = elementPath === location.pathname // Directly compare paths
        
        if (isMatch) {
            const { height, width, left } = el.getBoundingClientRect()
            setPill({
                height,
                width,
                left: el.offsetLeft,
                opacity: 1
            })
        }
    }, [location.pathname]) // Trigger only when location changes
    

    return(
        <Link ref={ref} to={to} id={id} className="text-3xl z-10 text-stone-900 p-4">
            {children}
        </Link>
    )
}
const BottomNavPill = ({options}) => {
    return(
        <motion.div animate={options} className="bg-amber-500 absolute rounded-full z-0 "/>
    )
}


export default BottomNav