import { act, useEffect, useState } from 'react';
import Styles from './styles/about.module.scss';

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

    const heroImages = [
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/desk-writing-person-girl-film-student-1242339-pxhere.com_.jpg',
        'https://layouts.siteorigin.com/wp-content/uploads/2017/05/ruler-1246653_1280_parallax.jpg'
    ];

    const yImages = [
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/IMG-20240829-WA0222-950x630.jpg',
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/IMG-20240829-WA0011-950x630.jpg',
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/IMG-20240829-WA0008-950x630.jpg',
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/IMG-20240829-WA0219-950x630.jpg',
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/IMG-20240829-WA0013-683x1024.jpg'
    ];

    const teamMemberImages = [
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/Leitung_Yaound.png',
        'https://ghomslinguistics.com/wp-content/uploads/2024/08/Sekraeterin_Yaound.png'
    ];

    return (
        <div className={Styles.container}>
            <div className={Styles.hero}>
                <img src={heroImages[0]} alt="hero" />
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
                    images={yImages}
                />
            </div>
            <div className={Styles.location_text}>
                <div className={Styles.container}>
                    <p>{activeCity === 'Yaoundé'?"In Yaoundé, we are located on the new omnisport road next to the Pharmacie le Bon Berger.":"In Douala we are located in the Ange Raphael district, opposite to the UBA bank."}</p>
                </div>
            </div>
            <div 
                className={Styles.map}
            >
                {activeCity==='Yaoundé'?<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.670670386745!2d11.536343073102387!3d3.8805997482249337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc591a809587f%3A0x5fca7857b0ffb18f!2sPharmacie%20Le%20Bon%20Berger!5e0!3m2!1sen!2scm!4v1727149479681!5m2!1sen!2scm" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8363288161895!2d9.734301073102989!3d4.053780746929916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d8343047bcf%3A0xd8299e4df65d63d5!2sUBA%20University%20Campus%20Agency!5e0!3m2!1sen!2scm!4v1727149601872!5m2!1sen!2scm" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
            </div>

            <div className={Styles.team}>
                <div className={Styles.content}>
                    <h2>Team in {activeCity}</h2>
                    <p>
                        The team in {activeCity} is highly qualified, dedicated 
                        and works harmoniously together to promote student success. 
                        With their passion and professionalism, they create a positive learning atmosphere 
                        and support each learner individually.
                    </p>
                    <div className={Styles.team_cards}>
                        <TeamMember picture={teamMemberImages[0]} name="SOLANGE FOKA" role="GRAPHIC DESIGNER" funFact="Hanging out with my best friend pretty much anywhere." />
                        <TeamMember picture={teamMemberImages[1]} name="MARIAM FON" role="LEAD DESIGNER" funFact="Give me my skateboard and set me free." />
                    </div>
                </div>
            </div>

            {/* <div className={Styles.clients}>
                <h3>Our clients</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo.
                </p>
            </div> */}
            <Testimonials/>
        </div>
    );
}

const TeamMember = ({ name, role, funFact, picture }) => (
    <div className={Styles.team_card}>
        <img src={picture} alt={name} />
        <div className={Styles.card_content}>
            <h4>{name} / {role}</h4>
            <p>{funFact}</p>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        { text: "The language training I received changed my life! I can now confidently communicate in English and travel the world.", author: "Mireille Kamga" },
        { text: "The interactive lessons and supportive teachers made learning a new language enjoyable and effective.", author: "Adama Ndong" },
        { text: "I never thought I could learn a language so quickly. The small class sizes really helped me thrive.", author: "Fotso Jean" },
        { text: "The immersive experience at this center is unmatched. I've made great friends while improving my language skills!", author: "Nji Tchoua" },
        { text: "Thanks to the amazing faculty, I achieved my language goals faster than I ever imagined!", author: "Fatou Simo" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    

    useEffect(() => {
        let i = -1;
        const text = testimonials[currentIndex].text;

        const interval = setInterval(() => {
            if (i < text.length-1) {
                setDisplayText((prev) => prev + text[i]);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                    setDisplayText('');
                }, 2500); // Pause before showing the next testimonial
            }
        }, 50); // Adjust typing speed

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className={Styles.testimonials}>
            <h3>What our students say</h3>
            <p>"{displayText}"</p>
            <p>- {testimonials[currentIndex].author}</p>
        </div>
    );
};

