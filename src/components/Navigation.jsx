import { useState, useRef, useEffect } from 'react';
import Styles from './styles/navigation.module.scss'
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Navigation() {
    const logoLink = "https://ghomslinguistics.com/wp-content/uploads/2024/08/cropped-GhomLinguisticsLogo_small.png";
    const [isMenu, setIsMenu] = useState(false);
    const [isSearchMenu, setIsSearchMenu] = useState(false);
    const searchMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchMenuRef.current && !searchMenuRef.current.contains(event.target)) {
                setIsSearchMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    {isSearchMenu && (
                        <div
                            ref={searchMenuRef}
                            className={Styles.search_menu}
                        >
                            <input type="text" />
                            <IoCloseCircleOutline onClick={() => setIsSearchMenu(false)} />
                        </div>
                    )}
                    <div className={Styles.logo}>
                        <img src={logoLink} alt="logo" />
                    </div>
                    <div className={Styles.links}>
                        <div>Home</div>
                        <div>News</div>
                        <div>Registration</div>
                        <div>Course</div>
                        <div>About us</div>
                        <div className={Styles.search} onClick={() => setIsSearchMenu(true)}>
                            <IoIosSearch />
                        </div>
                    </div> 
                    {!isMenu && (
                        <div className={Styles.menu} onClick={() => setIsMenu(true)}>
                            <IoIosMenu />
                        </div>
                    )}
                    {isMenu && (
                        <div className={Styles.menu} onClick={() => setIsMenu(false)}>
                            <IoMdClose />
                        </div>
                    )}
                </div>
            </div>
            {isMenu && (
                <div className={Styles.alt_nav}>
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
                </div>
            )}
        </div>
    );
}
