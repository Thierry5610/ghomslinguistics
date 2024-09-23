import { useState, useRef, useEffect } from 'react';
import Styles from './styles/navigation.module.scss';
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Navigation() {
    const logoLink = "https://ghomslinguistics.com/wp-content/uploads/2024/08/cropped-GhomLinguisticsLogo_small.png";
    const [isMenu, setIsMenu] = useState(false);
    const [isSearchMenu, setIsSearchMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const searchMenuRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                setIsScrolled(currentScrollY > lastScrollY);
                setLastScrollY(currentScrollY);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

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
        <div className={`${Styles.wrapper} ${isScrolled ? Styles.hide : ''}`}>
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
                        <Link to="/">Home</Link>
                        <Link to="/news">News</Link>
                        <Link to="/">Registration</Link>
                        <Link to="/language">Course</Link>
                        <Link to="/about">About us</Link>
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
                            <Link to="/" onClick={()=>setIsMenu(false)}>Home</Link>
                            <Link to="/news" onClick={()=>setIsMenu(false)}>News</Link>
                            <Link to="/" onClick={()=>setIsMenu(false)}>Registration</Link>
                            <Link to="/language" onClick={()=>setIsMenu(false)}>Course</Link>
                            <Link to="/about" onClick={()=>setIsMenu(false)}>About us</Link>
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
