import { useState } from 'react';
import Styles from './styles/navigation.module.scss'
import { IoIosSearch,IoIosMenu} from "react-icons/io";
import { IoMdClose } from "react-icons/io";
export default function Navigation() {
    const logoLink = "https://ghomslinguistics.com/wp-content/uploads/2024/08/cropped-GhomLinguisticsLogo_small.png"
    const [isMenu,setIsMenu] = useState(false)

    return(
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.logo}>
                        <img src={logoLink} alt="logo" />
                    </div>
                    <div className={Styles.links}>
                        <div>Home</div>
                        <div>News</div>
                        <div>Registration</div>
                        <div>Course</div>
                        <div>About us</div>
                        <div className={Styles.search}><IoIosSearch /></div>
                    </div> 
                    {!isMenu&&<div className={Styles.menu} onClick={()=>setIsMenu(true)}><IoIosMenu/></div>}
                    {isMenu&&<div className={Styles.menu} onClick={()=>setIsMenu(false)}><IoMdClose/></div>}
                </div>
            </div>
           {isMenu&&<div className={Styles.alt_nav}>
                <div className={Styles.content}>
                   <div className={Styles.links}>
                        <div>Home</div>
                        <div>News</div>
                        <div>Registration</div>
                        <div>Course</div>
                        <div>About us</div>
                        <div className={Styles.search}>
                            <input type="text" />
                            <IoIosSearch />
                        </div>
                   </div> 
                </div>
            </div>}
        </div>
    )
}