import { act, useEffect, useState } from 'react';
import Styles from './styles/about.module.scss';
import { useTranslation } from 'react-i18next';

const CityContent = ({ city, description, activeCity, images }) => {
    const {t} = useTranslation('about')
    return (
        <div className={Styles.content}>
            <h3>{t(`city_description.${activeCity}.heading`)}</h3>
            <p>{description}</p>
            <div className={Styles.gallery}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`${city}`} />
                ))}
            </div>
        </div>
    )
};

export default function About() {
    const {t} = useTranslation('about')
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
        '/images/site-images/desk-writing-person-girl-film-student-1242339-pxhere.com_.jpg',
        '/images/site-images/ruler-1246653_1280_parallax.jpg'
    ];

    const yImages = [
        '/images/yaounde/IMG-20240829-WA0222-950x630.jpg',
        '/images/yaounde/IMG-20240829-WA0011-950x630.jpg',
        '/images/yaounde/IMG-20240829-WA0008-950x630.jpg',
        '/images/yaounde/IMG-20240829-WA0219-950x630.jpg',
        '/images/yaounde/IMG-20240829-WA0013-683x1024.jpg'
    ];

    const dImages = [
        '/images/douala/IMG-20241013-WA0006.jpg',
        '/images/douala/IMG-20241013-WA0008.jpg',
        '/images/douala/IMG-20240928-WA0006.jpg',
        '/images/douala/IMG-20240928-WA0005.jpg',
        '/images/douala/IMG-20241013-WA0004.jpg',
        '/images/douala/IMG-20240928-WA0007.jpg'
    ]

    const yTeamMemberImages = [
        '/images/team/Leitung_Yaound.png',
        '/images/team/Sekraeterin_Yaound.png'
    ];
    const dTeamMemberImages = [
        '/images/team/IMG-20241013-WA0010.jpg'
    ]

    return (
        <div className={Styles.container}>
            <div className={Styles.hero}>
                <img src={heroImages[0]} alt="hero" />
                <h2>{t('hero.heading')}</h2>
                <p>{t('hero.paragraph')}</p>
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
                    activeCity={activeCity}
                    description={activeCity === 'Yaoundé' ? t('city_description.Yaoundé.description') : t('city_description.Douala.description')}
                    images={activeCity === 'Douala'? dImages: yImages}
                />
            </div>
            <div className={Styles.location_text}>
                <div className={Styles.container}>
                    <p>{activeCity === 'Yaoundé'?t('location_text.Yaoundé'):t('location_text.Douala')}</p>
                </div>
            </div>
            <div 
                className={Styles.map}
            >
                {activeCity==='Yaoundé'?<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.670670386745!2d11.536343073102387!3d3.8805997482249337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc591a809587f%3A0x5fca7857b0ffb18f!2sPharmacie%20Le%20Bon%20Berger!5e0!3m2!1sen!2scm!4v1727149479681!5m2!1sen!2scm" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8363288161895!2d9.734301073102989!3d4.053780746929916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d8343047bcf%3A0xd8299e4df65d63d5!2sUBA%20University%20Campus%20Agency!5e0!3m2!1sen!2scm!4v1727149601872!5m2!1sen!2scm" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
            </div>

            <div className={Styles.team}>
                <div className={Styles.content}>
                    <h2>{t(`team.${activeCity}.heading`)}</h2>
                    <p>
                        {t(`team.${activeCity}.paragraph`)}
                    </p>
                    <div className={Styles.team_cards}>
                        {t(`team.${activeCity}.members`,{returnObjects:true}).map((member,index)=>{
                            return(
                                <TeamMember key={index} picture={member.image} role={member.role} name={member.name} funFact={member.funFact}/>
                            )
                        })}
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
    const {t} = useTranslation('about')
    const testimonials = t('testimonials.testimonials',{returnObjects:true});

    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    

    useEffect(() => {
        let i = 0;
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
            <h3>{t('testimonials.heading')}</h3>
            <p>"{displayText}"</p>
            <p>- {testimonials[currentIndex].author}</p>
        </div>
    );
};

