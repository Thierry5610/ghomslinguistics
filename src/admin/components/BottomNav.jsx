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
        <div className="flex border border-stone-500 p-3 rounded-full shadow-md bg-white absolute left-1/2 bottom-[5%] -translate-x-1/2">
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
    useEffect(()=>{
        const el = document.getElementById(id)
        const ismatch = el.href.toString().includes(location.pathname)
        const {height, width} = el.getBoundingClientRect()
        if(ismatch){
            setPill({
                height,
                width,
                left: el.offsetLeft,
                opacity:1
            })
        }
    },[location])

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