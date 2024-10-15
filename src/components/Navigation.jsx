import { useState, useRef, useEffect } from 'react';
import Styles from './styles/navigation.module.scss';
import { IoIosSearch } from "react-icons/io";
import { LuCheck, LuGlobe, LuMenu, LuX } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { English, French, German } from './Flags';
import i18n from '../i18n'; // Import your i18next configuration

export default function Navigation() {
    const logoLink = "/images/logo/cropped-GhomLinguisticsLogo_small.png";
    const [isMenu, setIsMenu] = useState(false);
    const [isSearchMenu, setIsSearchMenu] = useState(false);
    const [isLangMenu, setIsLangMenu] = useState(false);
    const [lang, setLang] = useState(i18n.language);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const searchMenuRef = useRef(null);
    const langSelectRef = useRef(null);

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
            if (langSelectRef.current && !langSelectRef.current.contains(event.target)) {
                setIsLangMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language); // Change the language in i18next
        setLang(language); // Update the selected language state
        setIsLangMenu(false); // Close the language menu
    };

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
                        </div>
                    )}
                    <div className={Styles.logo}>
                        <img src={logoLink} alt="logo" />
                    </div>
                    <div className={Styles.links}>
                        <Link to="/">Home</Link>
                        <Link to="/news">News</Link>
                        <Link to="/register">Registration</Link>
                        <Link to="/language">Course</Link>
                        <Link to="/about">About us</Link>
                        <div className={Styles.locale_box} onClick={() => setIsLangMenu((curr) => !curr)}>
                            <LuGlobe />
                            <span>{lang}</span>
                            {isLangMenu && (
                                <div className={Styles.locales_select} ref={langSelectRef}>
                                    <div onClick={() => changeLanguage('en')}>
                                        <English />
                                        <span>English</span>
                                        {lang === 'en' && <LuCheck />}
                                    </div>
                                    <div onClick={() => changeLanguage('fr')}>
                                        <French />
                                        <span>French</span>
                                        {lang === 'fr' && <LuCheck />}
                                    </div>
                                    <div onClick={() => changeLanguage('de')}>
                                        <German />
                                        <span>German</span>
                                        {lang === 'de' && <LuCheck />}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={Styles.search} onClick={() => setIsSearchMenu(true)}>
                            <IoIosSearch />
                        </div>
                    </div>
                    {!isMenu && (
                        <div className={Styles.menu} onClick={() => setIsMenu(true)}>
                            <LuMenu />
                        </div>
                    )}
                    {isMenu && (
                        <div className={Styles.menu} onClick={() => setIsMenu(false)}>
                            <LuX />
                        </div>
                    )}
                </div>
            </div>
            {isMenu && (
                <div className={Styles.alt_nav}>
                    <div className={Styles.content}>
                        <div className={Styles.links}>
                            <Link to="/" onClick={() => setIsMenu(false)}>Home</Link>
                            <Link to="/news" onClick={() => setIsMenu(false)}>News</Link>
                            <Link to="/register" onClick={() => setIsMenu(false)}>Registration</Link>
                            <Link to="/language" onClick={() => setIsMenu(false)}>Course</Link>
                            <Link to="/about" onClick={() => setIsMenu(false)}>About us</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
