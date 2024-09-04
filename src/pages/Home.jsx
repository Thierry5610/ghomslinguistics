import Carousel from '../components/Carousel';
import Styles from './styles/home.module.scss';
import { FaChalkboardTeacher, FaQuestionCircle, FaUserFriends, FaBookOpen, FaExchangeAlt, FaFan } from 'react-icons/fa'
const heroImages = [
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/table-book-read-open-wood-vintage-674236-pxhere.com_.jpg",
    "https://ghomslinguistics.com/wp-content/uploads/2024/06/pexels-tima-miroshnichenko-5427868-1536x1024.jpg"
]
const carouselItems = [
    <div className={Styles.hero_card}>
        <img src={heroImages[0]} alt="hero image" />
        <h2>Language opens worlds – discover yours with us!</h2>
        <h3>Language school for the languages
        German English</h3>
        <button>Learn more</button>
    </div>,
    <div className={Styles.hero_card}>
    <img src={heroImages[1]} alt="hero image" />
    <h2>Learn languages, connect cultures – your future begins here!</h2>
    <h3>
    Language testing center
    German English</h3>
    <button>Learn more</button>
</div>
  ];
const missionImage = "https://ghomslinguistics.com/wp-content/uploads/2016/09/creamy-935155_1280.jpg"
export default function Home() {
    return(
        <div className={Styles.container}>
            <div className={Styles.hero}>
                <Carousel items={carouselItems}/>
            </div>
            <div className={Styles.cta_section}>
                <h3>“Master the world of languages ​​– start your journey with us!”</h3>
                <div>
                    <button>
                        Learn more
                    </button>
                </div>
            </div>
            <div className={Styles.about_section}>
                <div className={Styles.content}>
                    <h3>WHAT MAKES US DIFFERENT</h3>
                    <div className={Styles.points}>
                        <AboutItem heading="Experienced teachers" icon={<FaChalkboardTeacher />} text="Our team consists of qualified and experienced language teachers who are passionate about making the learning process efficient and inspiring." />
                        <AboutItem heading="Individual support" icon={<FaQuestionCircle />} text="We attach great importance to personal support for our students and offer tailor-made learning programs tailored to individual needs and goals." />
                        <AboutItem heading="Practice-oriented lessons" icon={<FaUserFriends />} text="Our lessons are aimed at applying language skills directly in everyday life, through practical exercises, role plays and real communication situations." />
                        <AboutItem heading="Modern teaching methods" icon={<FaBookOpen />} text="We rely on innovative teaching methods and current didactic approaches to make language teaching dynamic and practical." />
                        <AboutItem heading="Flexible course offerings" icon={<FaExchangeAlt />} text="Our school offers a variety of courses that adapt to learners' time and content needs, including intensive courses, evening courses and online learning options." />
                        <AboutItem heading="Air conditioning" icon={<FaFan />} text="Our school offers you a pleasant learning environment in modern, air-conditioned rooms in which you feel comfortable and can concentrate optimally even on hot days." />
                    </div>
                </div>
            </div>
            <div className={Styles.mission}>
            <img src={missionImage} alt="mission image" />
                <div className={Styles.content}>
                    <h3>OUR MISSION STATEMENT</h3>
                    <div>
                        At our language school, people are the focus. We firmly believe that language is the key to a successful and connected future. Our goal is to enable people of all ages and cultures to achieve their personal and professional goals through high-quality language education. We rely on individual support, modern teaching methods and an intercultural learning environment in which respect, openness and curiosity are paramount. Our passion is to build bridges between people and pave the way for better understanding and togetherness.
                    </div>
                </div>
            </div>
            <div className={Styles.partners}>
                <div className={Styles.content}>
                    <h3>OUR PARTNERS</h3>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AboutItem({heading,icon,text}){
    return(
        <>
            <div className={Styles.point}>
                <div className={Styles.icon}>
                    {icon}
                </div>
                <h4>{heading}</h4>
                <div className={Styles.text}>
                    {text}
                </div>
            </div> 
        </>
    )
}