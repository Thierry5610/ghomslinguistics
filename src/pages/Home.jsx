import Carousel from '../components/Carousel';
import Styles from './styles/home.module.scss';
import { RiAppsLine } from "react-icons/ri";
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
                        <AboutItem heading="Experienced teachers" icon={<RiAppsLine />} text="Our team consists of qualified and experienced language teachers who are passionate about making the learning process efficient and inspiring." />
                        <AboutItem heading="Individual support" icon={<RiAppsLine />} text="We attach great importance to personal support for our students and offer tailor-made learning programs tailored to individual needs and goals." />
                        <AboutItem heading="Practice-oriented lessons" icon={<RiAppsLine />} text="Our lessons are aimed at applying language skills directly in everyday life, through practical exercises, role plays and real communication situations." />
                        <AboutItem heading="Modern teaching methods" icon={<RiAppsLine />} text="We rely on innovative teaching methods and current didactic approaches to make language teaching dynamic and practical." />
                        <AboutItem heading="Flexible course offerings" icon={<RiAppsLine />} text="Our school offers a variety of courses that adapt to learners' time and content needs, including intensive courses, evening courses and online learning options." />
                        <AboutItem heading="Air conditioning" icon={<RiAppsLine />} text="Our school offers you a pleasant learning environment in modern, air-conditioned rooms in which you feel comfortable and can concentrate optimally even on hot days." />
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