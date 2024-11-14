import { useEffect, useState } from 'react'
import Styles from './styles/course.module.scss'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import RegisterCourseModal from './RegisterCourseModal';
import RegisterModal from '../components/RegisterModal';
import { useTranslation } from 'react-i18next';
const heroImage = "/images/site-images/desk-writing-work-hand-man-table-655321-pxhere.com_.jpg"
const sideImage = "/images/site-images/table-book-read-open-wood-vintage-674236-pxhere.com_-1024x768.jpg"
export default function Course() {
    const { language } = useParams();
    const navigate = useNavigate();
    const [activeTabID, setActiveTabID] = useState(0);
    const [activeTabToggleID, setActiveTabToggleID] = useState([]);
    const [languageData, setLanguageData] = useState({});
    const [tabArray, setTabArray] = useState([]);
    const [selectedCourse,setSelectedCourse] = useState(null)
    const [isCoursesModalOpen,setIsCoursesModalOpen] = useState(false)
    const [isRegisterModalOpen,setIsRegisterModalOpen] = useState(false)
    
    const {t} = useTranslation('course')

    useEffect(() => {
        if (language !== "english" && language !== "german") {
            navigate('/language');
        } else {
            const data = language === 'english' ? t('englishData',{returnObjects:true}) : t('germanData',{returnObjects:true});
            setLanguageData(data);
            setActiveTabID(data.courses[0]?.id || 0); // Set the active tab ID to the first course's ID if it exists
        }
    }, [language, navigate]);

    useEffect(() => {
        if (languageData?.courses) {
            setTabArray(languageData.courses.filter(data => data.id === activeTabID));
        }
    }, [activeTabID, languageData]);

    const toggleTab = (id) => {
        setActiveTabToggleID((current) => {
            if (current.includes(id)) {
                return current.filter(data => data !== id);
            } else {
                return [...current, id];
            }
        });
    };

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.hero}>
                        <img src={heroImage} alt="hero" />
                        <h2>{languageData?.headline}</h2>
                    </div>
                    <div className={Styles.description}>
                        <div className={Styles.image_section}><img src={sideImage} alt="book" /></div>
                        <div className={Styles.text_section}>
                            <h3>{languageData?.headline2}</h3>
                            <p>{languageData?.description}</p>
                        </div>
                    </div>
                    <div className={Styles.registration}>
                        <div className={Styles.tab_headings}>
                            {languageData?.courses?.map(data => (
                                <div
                                    key={data.id}
                                    className={`${Styles.tab_heading} ${data.id === activeTabID ? Styles.active_tab_heading : ''}`}
                                    onClick={() => setActiveTabID(data.id)}
                                >
                                    {data.heading}
                                </div>
                            ))}
                        </div>
                        <div className={Styles.tab_body}>
                            {tabArray?.map(data => (
                                <TabSection key={data.id}>
                                    {data?.sectionData?.map(section => (
                                        <TabPortion key={section.heading} heading={section.heading} text={section.text} />
                                    ))}
                                    {data?.sectionLink && <TabLink text={data.sectionLink.text} link={data.sectionLink.link} />}
                                    {data?.sectionCTA && <TabButton text={data.sectionCTA.text} link={data.sectionCTA.link}  onClick={()=>setIsCoursesModalOpen(true)}/>}
                                </TabSection>
                            ))}
                        </div>
                    </div>
                    <div className={Styles.registration_alt}>
                        <div className={Styles.tab_body}>
                            {languageData?.courses?.map(data => (
                                <div key={data.id}>
                                    <div
                                        className={`${Styles.tab_heading} ${activeTabToggleID.includes(data.id) ? Styles.active_tab_heading : ''}`}
                                        onClick={() => toggleTab(data.id)}
                                    >
                                        <div>{data.heading}</div>
                                        <div><MdOutlineArrowForwardIos /></div>
                                    </div>
                                    <div className={`${Styles.tab_container} ${activeTabToggleID.includes(data.id) ? Styles.active_tab_container : ''}`}>
                                        <TabSection>
                                            {data.sectionData.map(section => (
                                                <TabPortion key={section.heading} heading={section.heading} text={section.text} />
                                            ))}
                                            {data.sectionLink && <TabLink text={data.sectionLink.text} link={data.sectionLink.link} />}
                                            {data.sectionCTA && <TabButton text={data.sectionCTA.text} link={data.sectionCTA.link} onClick={()=>setIsCoursesModalOpen(true)}/>}
                                        </TabSection>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isCoursesModalOpen&&<RegisterCourseModal onOpenCta={()=>{setIsCoursesModalOpen(false);setIsRegisterModalOpen(true)}} language={language} onClose={()=>setIsCoursesModalOpen(false)} setCourse={setSelectedCourse}/>}
            {isRegisterModalOpen&&<RegisterModal course={selectedCourse} onClose={()=>setIsRegisterModalOpen(false)}/>}
        </>
    );
}

function TabPortion({heading,text,...props}){
    return(
        <div className={Styles.tab_portion}>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    )
}

function TabSection({children}){
    return(
        <div className={Styles.tab_section}>
            {children}
        </div>
    )
}

function TabLink ({text,link}){
    return(
        <a className={Styles.tab_link} href={link}>{text}</a>
    )
}

function TabButton ({text,link,onClick}){
    return(
        <Link  onClick={onClick} className={Styles.tab_button} to={link}>{text}</Link>
    )
}




