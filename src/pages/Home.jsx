import Carousel from '../components/Carousel';
import Styles from './styles/home.module.scss';
import { useNavigate} from 'react-router-dom';

import { FaChalkboardTeacher, FaQuestionCircle, FaUserFriends, FaBookOpen, FaExchangeAlt, FaFan } from 'react-icons/fa'
const heroImages = [
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/table-book-read-open-wood-vintage-674236-pxhere.com_.jpg",
    "https://ghomslinguistics.com/wp-content/uploads/2024/06/pexels-tima-miroshnichenko-5427868-1536x1024.jpg"
]

const missionImage = "https://ghomslinguistics.com/wp-content/uploads/2016/09/creamy-935155_1280.jpg"
const partnerLogos = [
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/DVK-Logo_1000x1000-300x300.png",
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/og-image-standard-logo-barmer-data-300x300.jpg"
]
const testimonialImage = [
    "https://ghomslinguistics.com/wp-content/uploads/2024/08/girl-2771936_1920-1024x789.jpg",
    "https://ghomslinguistics.com/wp-content/uploads/2024/06/pexels-tima-miroshnichenko-5427868-1024x683.jpg"
]
const testimonials = [
    <TestimonialItem
        author="Jane D."
        text="The language school far exceeded my expectations. Thanks to the individual support and the practical teaching methods, I made rapid progress. The teachers are committed and the learning environment is excellent. I can recommend this school to anyone who wants to learn a new language effectively!"
        image={testimonialImage[0]}
    />,
    <TestimonialItem
        author="Derrick D."
        text="The German course at our school in Cameroon is fantastic! The teachers are competent and motivating. I made rapid progress and feel more confident in German."
        image={testimonialImage[1]}
    />
]
export default function Home() {
    const navigate = useNavigate();
    
const carouselItems = [
    <div className={Styles.hero_card}>
        <img src={heroImages[0]} alt="hero image" />
        <h2>Language opens worlds – discover yours with us!</h2>
        <h3>Language school for the German and English languages</h3>
        <button onClick={()=>navigate('/about')}>Learn more</button>
    </div>,
    <div className={Styles.hero_card}>
    <img src={heroImages[1]} alt="hero image" />
    <h2>Learn languages, connect cultures – your future begins here!</h2>
    <h3>
    Language testing center
    German and English</h3>
    <button onClick={()=>navigate('/course')}>Learn more</button>
</div>
  ];
    return(
        <div className={Styles.container}>
            <div className={Styles.hero}>
                <Carousel items={carouselItems}/>
            </div>
            <div className={Styles.cta_section}>
                <h3>“Master the world of languages ​​– start your journey with us!”</h3>
                <div>
                    <button onClick={()=>navigate('/about')}>
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
                        <AboutItem heading="Modern learning space" icon={<FaChalkboardTeacher />} text="Our school offers you a pleasant learning environment in modern, air-conditioned rooms in which you feel comfortable and can concentrate optimally even on hot days." />
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
            <div className={Styles.testimonials}>
                <div className={Styles.content}>
                    <h3>WHAT OUR STUDENTS SAY</h3>
                    <div className={Styles.testimonial_box}>
                        <Carousel items={testimonials}/>
                    </div>
                </div>
            </div>
            <div className={Styles.partners}>
                <div className={Styles.content}>
                    <h3>OUR PARTNERS</h3>
                    <div className={Styles.logo_box}>
                        <a href="https://dv-koch.de" className={Styles.logo}>
                            <img src={partnerLogos[0]} alt="logo" />
                        </a>
                        <a href="https://www.barmer.de" className={Styles.logo}>
                            <img src={partnerLogos[1]} alt="logo" />
                        </a>
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

function TestimonialItem ({image,author,text}) {
        return(
            <div className={Styles.testimonial}>
                <div className={Styles.testimonial_photo}>
                    <img src={image} alt={author} />
                </div>
                <div className={Styles.testimonial_text}>
                    <div>{text}</div>
                    <div>{author}</div>
                </div>
            </div>
        )
}

