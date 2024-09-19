import { useEffect, useState } from 'react'
import Styles from './styles/course.module.scss'
import { MdOutlineArrowForwardIos } from "react-icons/md";
const germanData = [
    {   
        id:0,
        heading: "German course A1",
        sectionData: [
            {
                heading:"",
                text: "A German course A1 is an introductory course that teaches basic language skills. In this course you will learn simple grammar, basic vocabulary and everyday expressions. The aim is to be able to have simple conversations and find your way around in typical everyday situations. Ideal for beginners with no previous knowledge."
            },
            {
                heading:"Can I take part in the German course A1 without any knowledge of German?",
                text: "Yes. The course is a beginners course and is aimed at people who have no previous knowledge of the German language. At the same time, the A1 course will familiarize you with the German language and teach you basic vocabulary to enable you to easily communicate in German for the first time.."
            },
            {
                heading:"Scope - Testing",
                text: "The course, which comprises around 200 teaching units, concludes with the A1 exam. This includes sections on grammar, reading comprehension, listening comprehension and text production."
            },
            {
                heading:"Period",
                text: "The course lasts two months and takes place Monday to Friday (approx. 20 hours per week). At the end of the course, participants will have the basis for reading and writing in German. They will be able to talk about themselves and have simple conversations."
            }
        ],
        sectionLink: {
            text: "telcA1",
            link: "https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-a1.html"
        },
        sectioinCTA: {
            text:"Register here!",
            link:"https://ghomslinguistics.com/anmeldung/"
        }
    },
    {
        id:1,
        heading: "German course A2",
        sectionData: [
            {
                heading:"",
                text: "A German course A2 builds on the basics of A1 and deepens your language skills. You will learn to express yourself better in everyday situations, understand simple texts and hold conversations about familiar topics. Ideal for learners with basic knowledge who want to expand their skills."
            },
            {
                heading:"Scope - Testing",
                text: "The course, which comprises around 200 teaching units, ends with the written and oral A2 exam. The written exam contains sections on grammar, reading comprehension, listening comprehension and text production."
            },
            {
                heading:"Period",
                text: "The course lasts two months and takes place from Monday to Friday (approx. 20 hours per week)"
            },
        ],
        sectionLink: {
            text: "telcA2",
            link: "https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-a2.html"
        },
        sectioinCTA: {
            text:"Register here!",
            link:"https://ghomslinguistics.com/anmeldung/"
        }
    },
    {
        id:2,
        heading: "German course B1",
        sectionData: [
            {
                heading:"",
                text: "A German B1 course deepens your language skills and promotes independent use of the German language. You will learn to understand more complex texts, express yourself clearly and in detail and actively participate in conversations about everyday life and work. Ideal for advanced learners who want to further develop their language skills."
            },
            {
                heading:"Scope - Testing",
                text: "The course, which comprises around 200 teaching units, ends with the written and oral B1 exam. The written exam therefore contains sections on grammar, reading comprehension, listening comprehension and text production."
            },
            {
                heading:"Period",
                text: "The course lasts two months and takes place from Monday to Friday (approx. 20 hours per week)."
            }
        ],
        sectionLink: {
            text: "telcB1",
            link: "https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/zertifikat-deutsch-telc-deutsch-b1.html"
        },
        sectioinCTA: {
            text:"Register here!",
            link:"https://ghomslinguistics.com/anmeldung/"
        }
    },
    {
        id:3,
        heading: "German course B2",
        sectionData: [
            {
                heading:"",
                text: "A German B2 course improves your language skills for demanding situations. You will learn to understand complex texts, communicate fluently and spontaneously, and present arguments clearly. Ideal for advanced learners who want to speak and write German confidently in academic or professional contexts."
            },
            {
                heading:"Scope - Testing",
                text: "At the end of the B2 course there is both a written and an oral B2 exam. The written exam contains parts on grammar, reading, listening and text production."
            },
            {
                heading:"Period",
                text: "The course lasts two months and takes place from Monday to Friday (approx. 20 hours per week)."
            }
        ],
        sectionLink: {
            text: "telcB2",
            link: "https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-b2.html"
        },
        sectioinCTA: {
            text:"Register here!",
            link:"https://ghomslinguistics.com/anmeldung/"
        }
    },
    {
        id:4,
        heading: "German course C1",
        sectionData: [
            {
                heading:"",
                text: "A German C1 course will bring your language skills to an almost native speaker level. You will learn to understand complex texts, express yourself fluently and spontaneously, and explain complex issues clearly. Ideal for learners who want to use German confidently in academic or professional contexts."
            },
            {
                heading:"Scope - Testing",
                text: "At the end of the C1 course there is both a written and an oral C1 exam. The written exam contains parts on grammar, reading, listening and text production."
            },
            {
                heading:"Period",
                text: "The course lasts two months and takes place from Monday to Friday (approx. 20 hours per week)."
            }
        ],
        sectionLink: {
            text: "telcC1",
            link: "https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-c1-hochschule.html#"
        },
        sectioinCTA: {
            text:"Register here!",
            link:"https://ghomslinguistics.com/anmeldung/"
        }
    }
]
const heroImage = "https://ghomslinguistics.com/wp-content/uploads/2024/08/desk-writing-work-hand-man-table-655321-pxhere.com_.jpg"
const sideImage = "https://ghomslinguistics.com/wp-content/uploads/2024/08/table-book-read-open-wood-vintage-674236-pxhere.com_-1024x768.jpg"
export default function Course() {
    const [activeTabID,setActiveTabID] = useState(0)
    const [activeTabToggleID,setActiveTabToggleID] = useState('')
    const [tabArray,setTabArray] = useState([])
    useEffect(()=>{
        setTabArray(germanData.filter(data=>data.id===activeTabID))
    },[activeTabID])
    const toggleTab = function(id){
        if(id===activeTabToggleID){
            setActiveTabToggleID('')
        }else {
            setActiveTabToggleID(id)
        }
    }
    return(
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.hero}>
                    <img src={heroImage} alt="hero" />
                    <h2>German as a foreign language</h2>
                </div>
                <div className={Styles.description}>
                    <div className={Styles.image_section}><img src={sideImage} alt="book" /></div>
                    <div className={Styles.text_section}>
                        <h3>What is a German course?</h3>
                        <p>
                            A German course is a structured learning opportunity that allows you to learn or improve the German language. 
                            At our school in Cameroon, we offer German courses for beginners to advanced learners, 
                            tailored to the individual needs and abilities of the learners.
                            Our German courses cover all important aspects of the language, including grammar, 
                            vocabulary, pronunciation and conversation skills. 
                            Through interactive exercises, practical applications and cultural insights, 
                            we promote deep understanding and effective communication in German.
                            The courses are led by qualified teachers who have extensive experience in teaching German as a foreign language. 
                            Our goal is to give learners the ability to express themselves confidently and correctly 
                            in German in a variety of everyday and professional situations.
                            Whether you want to learn German for your career, studies or personal interests, our German course will 
                            provide you with the tools and knowledge to achieve your language goals. 
                            Visit our school in Cameroon and start your journey into German language and culture today!
                        </p>
                    </div>
                </div>
                <div className={Styles.registration}>
                    <div className={Styles.tab_headings}>
                        {germanData.map(data=>{
                            return(
                                <div className={`${Styles.tab_heading} ${data.id===activeTabID?Styles.active_tab_heading:''}`} onClick={()=>setActiveTabID(data.id)}>
                                    {data.heading}
                                </div>
                            )
                        })}
                    </div>
                    <div className={Styles.tab_body}>
                        {tabArray.map(data=>{
                            return(
                                <TabSection>
                                    {data.sectionData.map(section=>{
                                        return(
                                            <TabPortion heading={section.heading} text={section.text}/>
                                        )
                                    })}
                                    {data.sectionLink&&<TabLink text={data.sectionLink.text} link={data.sectionLink.link}/>}
                                    {data.sectioinCTA&&<TabButton text={data.sectioinCTA.text} link={data.sectioinCTA.link}/>}
                                </TabSection>
                            )
                        })}
                    </div>
                </div>
                <div className={Styles.registration_alt}>
                    <div className={Styles.tab_body}>
                        {germanData.map(data=>{
                            return(
                                <>
                                    <div className={`${Styles.tab_heading} ${data.id===activeTabToggleID?Styles.active_tab_heading:''}`} onClick={()=>toggleTab(data.id)}>
                                        <div>{data.heading}</div>
                                        <div><MdOutlineArrowForwardIos/></div>
                                    </div>
                                    <div className={`${Styles.tab_container} ${data.id===activeTabToggleID?Styles.active_tab_container:''}`}>
                                        <TabSection>
                                            {data.sectionData.map(section=>{
                                                return(
                                                    <TabPortion heading={section.heading} text={section.text}/>
                                                )
                                            })}
                                            {data.sectionLink&&<TabLink text={data.sectionLink.text} link={data.sectionLink.link}/>}
                                            {data.sectioinCTA&&<TabButton text={data.sectioinCTA.text} link={data.sectioinCTA.link}/>}
                                        </TabSection>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
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

function TabButton ({text,link}){
    return(
        <a  className={Styles.tab_button} href={link}>{text}</a>
    )
}




