import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Styles from './styles/home.module.scss';
import { FaChalkboardTeacher, FaQuestionCircle, FaUserFriends, FaBookOpen, FaExchangeAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const heroImages = [
  "/images/site-images/table-book-read-open-wood-vintage-674236-pxhere.com_.jpg",
  "/images/site-images/pexels-tima-miroshnichenko-5427868-1536x1024.jpg"
];

const missionImage = "/images/site-images/creamy-935155_1280.jpg";
const partnerLogos = [
  "/images/site-images/DVK-Logo_1000x1000-300x300.png",
  "/images/site-images/og-image-standard-logo-barmer-data-300x300.jpg"
];

const testimonialImages = [
  "/images/site-images/girl-2771936_1920-1024x789.jpg",
  "/images/site-images/pexels-tima-miroshnichenko-5427868-1024x683.jpg"
];

export default function Home() {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  const carouselItems = heroImages.map((image, index) => (
    <div className={Styles.hero_card} key={index}>
      <img src={image} alt="hero image" />
      <h2>{t(`carousel.${index}.title`)}</h2>
      <h3>{t(`carousel.${index}.subtitle`)}</h3>
      <button onClick={() => navigate(index === 0 ? '/about' : '/language')}>{t(`carousel.${index}.button`)}</button>
    </div>
  ));

  return (
    <div className={Styles.container}>
      <div className={Styles.hero}>
        <Carousel items={carouselItems} />
      </div>
      <div className={Styles.cta_section}>
        <h3>{t('cta_section.text')}</h3>
        <div>
          <button onClick={() => navigate('/about')}>
            {t('cta_section.button')}
          </button>
        </div>
      </div>
      <div className={Styles.about_section}>
        <div className={Styles.content}>
          <h3>{t('about_section.heading')}</h3>
          <div className={Styles.points}>
            {t('about_section.points', { returnObjects: true }).map((point, index) => (
              <AboutItem
                key={index}
                heading={point.heading}
                text={point.text}
                icon={getIcon(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={Styles.mission}>
        <img src={missionImage} alt="mission image" />
        <div className={Styles.content}>
          <h3>{t('mission.heading')}</h3>
          <div>{t('mission.text')}</div>
        </div>
      </div>
      <div className={Styles.testimonials}>
        <div className={Styles.content}>
          <h3>{t('testimonials.heading')}</h3>
          <Carousel items={t('testimonials.items', { returnObjects: true }).map((item, index) => (
            <TestimonialItem
              key={index}
              author={item.author}
              text={item.text}
              image={testimonialImages[index]}
            />
          ))} />
        </div>
      </div>
      <div className={Styles.partners}>
        <div className={Styles.content}>
          <h3>{t('partners.heading')}</h3>
          <div className={Styles.logo_box}>
            {partnerLogos.map((logo, index) => (
              <a href={index === 0 ? "https://dv-koch.de" : "https://www.barmer.de"} key={index} className={Styles.logo}>
                <img src={logo} alt="partner logo" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutItem({ heading, icon, text }) {
  return (
    <div className={Styles.point}>
      <div className={Styles.icon}>
        {icon}
      </div>
      <h4>{heading}</h4>
      <div className={Styles.text}>
        {text}
      </div>
    </div>
  );
}

function TestimonialItem({ image, author, text }) {
  return (
    <div className={Styles.testimonial}>
      <div className={Styles.testimonial_photo}>
        <img src={image} alt={author} />
      </div>
      <div className={Styles.testimonial_text}>
        <div>{text}</div>
        <div>{author}</div>
      </div>
    </div>
  );
}

function getIcon(index) {
  switch (index) {
    case 0: return <FaChalkboardTeacher />;
    case 1: return <FaQuestionCircle />;
    case 2: return <FaUserFriends />;
    case 3: return <FaBookOpen />;
    case 4: return <FaExchangeAlt />;
    case 5: return <FaChalkboardTeacher/>;
    default: return null;
  }
}
