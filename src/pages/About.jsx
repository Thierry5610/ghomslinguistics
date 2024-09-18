import Styles from './styles/about.module.scss';
import image from '../assets/random wallpaper.png'
export default function About() {
    return(
        <div className={Styles.container}>
            <div className={Styles.hero}>
                <img src={image} alt="hero" />
                <h2>About us</h2>
                <p>"We believe that language builds bridges and opens paths to new possibilities."</p>
            </div>
            <div className={Styles.impression}>
                <div className={Styles.content}>
                    <h3>Impression of Yaoundé school</h3>
                    <p>
                        The language school in Yaoundé is modernly equipped and offers 
                        air-conditioned classrooms for a comfortable learning environment. 
                        Language lessons are designed to be effective using interactive teaching methods 
                        and the latest technology. Small groups allow for personal attention 
                        and promote rapid learning progress.
                    </p>
                    <div className={Styles.gallery}>
                        <img src={image} alt="Yaoundé" />
                        <img src={image} alt="Yaoundé" />
                        <img src={image} alt="Yaoundé" />
                        <img src={image} alt="Yaoundé" />
                        <img src={image} alt="Yaoundé" />
                    </div>
                </div>
            </div>
            <div 
                className={Styles.hero_two}
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url('${image}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundAttachment: "fixed"
                }}
            >
                {/* <img src={image} alt="hero2" /> */}
                <h3>
                    "Sed ut perspiciatis unde omnis ise natus error sit voluptatem accusantium doloremque laudantium."
                </h3>
            </div>
            <div className={Styles.team}>
                <div className={Styles.content}>
                    <h2>Team in Yaoundé</h2>
                    <p>
                        The team in Yaoundé is highly qualified, dedicated 
                        and works harmoniously together to promote student success. 
                        With their passion and professionalism, they create a positive learning atmosphere 
                        and support each learner individually.
                    </p>
                    <div className={Styles.team_cards}>
                        <div className={Styles.team_card}>
                            <img src={image} alt="member"/>
                            <div className={Styles.card_content}>
                                <h4>JANE DOE / GRAPHIC DESIGNER</h4>
                                <p>
                                    What do I do for fun? Hanging out with my best friend pretty much anywhere.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.team_card}>
                            <img src={image} alt="member"/>
                            <div className={Styles.card_content}>
                                <h4>JACK DOE / LEAD DESIGNER</h4>
                                <p>
                                    What do I do for fun? Give me my skateboard and set me free.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.clients}>
                <h3>Our clients</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
            {/* <div className={Styles.map}>
                map
            </div> */}
        </div>
    )
}