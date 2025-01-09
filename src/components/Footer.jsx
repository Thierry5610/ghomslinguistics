import React, { useEffect, useState } from 'react';
import Styles from './styles/footer.module.scss';
import { Link } from 'react-router-dom';
import { DataProtectionModal } from './DataProtectionModal';
import ContactModal from './ContactModal';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import { getAnnouncements } from '../SupabaseServices';
import { VideoLink } from '../pages/News';

export default function Footer() {
    const { t } = useTranslation('footer'); // Get the translation function
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [isDataProtectionOpen, setDataProtectionOpen] = useState(false);
    const imageSrc = "/images/logo/cropped-GhomLinguisticsLogo_small.png";

    const [news,setNews] = useState([])
    useEffect(()=>{
        const getData = async () => {
            const data = await getAnnouncements()
            setNews(data)
            //console.log(data)
        }
        getData()
    },[])

    const handleOpenContactModal = () => {
        setContactModalOpen(true);
    };

    const handleCloseContactModal = () => {
        setContactModalOpen(false);
    };

    const handleOpenDataProtectionModal = () => {
        setDataProtectionOpen(true);
    };

    const handleCloseDataProtectionModal = () => {
        setDataProtectionOpen(false);
    };

    const handleAcceptDataProtection = () => {
        setDataProtectionOpen(false);
    };

    const handleContactFromDataProtection = () => {
        setDataProtectionOpen(false);
        setContactModalOpen(true);
    };

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.section_1}>
                        <div className={Styles.logo_box}>
                            <div className={Styles.logo}>
                                <img src={imageSrc} alt={t('footer.logo_alt')} /> {/* Translate the alt text */}
                            </div>
                            <div className={Styles.socials}>
                                {/* Add social icons here if needed */}
                            </div>
                        </div>
                        <div className={Styles.links_box}>
                            <h3>{t('footer.ghoms_linguistic')}</h3> {/* Translate heading */}
                            <div className={Styles.links}>
                                <div>{t('footer.address.street1')}</div> {/* Translate street address */}
                                <div>{t('footer.address.city1')}</div> {/* Translate city */}
                                <a href='mailto:contact@ghomslinguistics.com'>contact@ghomslinguistics.com</a>
                                <div>{t('footer.phone')}</div> {/* Translate phone number */}
                            </div>
                        </div>
                        <div className={Styles.links_box}>
                            <h3>{t('footer.latest_news')}</h3> {/* Translate heading */}
                            <div className={Styles.links}>
                                <div>{t('footer.address.street2')}</div> {/* Translate street address */}
                                <div>{t('footer.address.city2')}</div> {/* Translate city */}
                                {/* <Link to="/news">{t('footer.news.start_date')}</Link>
                                <Link to="/news">{t('footer.news.course_start')}</Link> */}
                                {news?.slice(0, 2).map((element, index) => (
                                    <Link to="/news" key={index}>{element?.headline}</Link>
                                ))}
                            </div>
                        </div>
                        <div className={Styles.links_box}>
                            <h3>{t('footer.menu')}</h3> {/* Translate heading */}
                            <div className={Styles.links}>
                                <Link to="#" onClick={handleOpenDataProtectionModal}>{t('footer.data_protection')}</Link>
                                <Link to="#" onClick={handleOpenContactModal}>{t('footer.contact')}</Link>
                                <Link to="#" onClick={(e)=>{e.preventDefault()}}><VideoLink label={t("footer.HowTo")} videoURL={"/videos/howtoregister.mp4"}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.section_2}>
                        <span>{t('footer.copyright', { year: (new Date()).getFullYear() })} - </span>
                        <Link to="#" onClick={handleOpenDataProtectionModal}>{t('footer.data_protection')}</Link>
                    </div>
                </div>
            </div>
            {isDataProtectionOpen && (
                <DataProtectionModal
                    onClose={handleAcceptDataProtection}
                    onContact={handleContactFromDataProtection}
                />
            )}
            {isContactModalOpen && <ContactModal onClose={handleCloseContactModal} />}
        </>
    );
}
