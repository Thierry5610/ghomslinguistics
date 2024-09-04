import Carousel from '../components/Carousel';
import Styles from './styles/home.module.scss'
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
        </div>
    )
}