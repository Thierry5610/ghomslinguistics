import { useState } from 'react';
import Styles from './styles/about.module.scss';
import image from '../assets/random wallpaper.png';

const CityContent = ({ city, description, images }) => (
    <div className={Styles.content}>
        <h3>Impression of {city} school</h3>
        <p>{description}</p>
        <div className={Styles.gallery}>
            {images.map((img, index) => (
                <img key={index} src={img} alt={`${city}`} />
            ))}
        </div>
    </div>
);

export default function About() {
    const [activeCity, setActiveCity] = useState('Yaoundé');

    const yaoundeDescription = `
        The language school in Yaoundé is modernly equipped and offers 
        air-conditioned classrooms for a comfortable learning environment. 
        Language lessons are designed to be effective using interactive teaching methods 
        and the latest technology. Small groups allow for personal attention 
        and promote rapid learning progress.
    `;

    const doualaDescription = `
        The language school in Douala features state-of-the-art facilities 
        and a vibrant atmosphere that encourages interactive learning. 
        Our dedicated teachers utilize innovative teaching methods 
        to ensure that each student thrives in a supportive environment.
    `;

    const images = Array(5).fill(image); // Placeholder for images

    return (
        <div className={Styles.container}>
            <div className={Styles.hero}>
                <img src={image} alt="hero" />
                <h2>About us</h2>
                <p>"We believe that language builds bridges and opens paths to new possibilities."</p>
            </div>
            
            <div className={Styles.impression}>
                <div className={Styles.toggle}>
                    <button 
                        className={activeCity === 'Yaoundé' ? Styles.active : Styles.inactive} 
                        onClick={() => setActiveCity('Yaoundé')}
                    >
                        Yaoundé
                    </button>
                    <button 
                        className={activeCity === 'Douala' ? Styles.active : Styles.inactive} 
                        onClick={() => setActiveCity('Douala')}
                    >
                        Douala
                    </button>
                </div>
                <CityContent 
                    city={activeCity} 
                    description={activeCity === 'Yaoundé' ? yaoundeDescription : doualaDescription}
                    images={images}
                />
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
                <h3>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
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
                        <TeamMember name="JANE DOE" role="GRAPHIC DESIGNER" funFact="Hanging out with my best friend pretty much anywhere." />
                        <TeamMember name="JACK DOE" role="LEAD DESIGNER" funFact="Give me my skateboard and set me free." />
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
        </div>
    );
}

const TeamMember = ({ name, role, funFact }) => (
    <div className={Styles.team_card}>
        <img src={image} alt={name} />
        <div className={Styles.card_content}>
            <h4>{name} / {role}</h4>
            <p>{funFact}</p>
        </div>
    </div>
);
