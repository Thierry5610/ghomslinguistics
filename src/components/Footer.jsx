import React, { useState } from 'react';
import Styles from './styles/footer.module.scss';
import { Link } from 'react-router-dom';
import { DataProtectionModal } from './DataProtectionModal';
import ContactModal from './ContactModal';

export default function Footer() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [isDataProtectionOpen, setDataProtectionOpen] = useState(false);
    const imageSrc = "/images/logo/cropped-GhomLinguisticsLogo_small.png";

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
                                <img src={imageSrc} alt="logo" />
                            </div>
                            <div className={Styles.socials}>
                                {/* Add social icons here if needed */}
                            </div>
                        </div>
                        <div className={Styles.links_box}>
                            <h3>GHOMS LINGUISTIC</h3>
                            <div className={Styles.links}>
                                <div>Ange Raphael</div>
                                <div>Douala, Cameroon</div>
                                <a href='mailto:olivtsanga@ghomslinguistics.com'>olivtsanga@ghomslinguistics.com</a>
                                <div>+23 7 6 93 07 17 89</div>
                            </div>
                        </div>
                        <div className={Styles.links_box}>
                            <h3>Latest news</h3>
                            <div className={Styles.links}>
                                <div>Yaoundé</div>
                                <Link to="/news">Next school start date is June 17, 2024</Link>
                                <Link to="/news">Next course start on April 1st</Link>
                            </div>
                        </div>
                        <div className={Styles.links_box}>
                            <h3>Menu</h3>
                            <div className={Styles.links}>
                            <Link to="#" onClick={handleOpenDataProtectionModal}>Data Protection</Link>
                                <Link to="#" onClick={handleOpenContactModal}>Contact</Link> {/* Updated to open modal */}
                            </div>
                        </div>
                    </div>
                    <div className={Styles.section_2}>
                        <span>Copyright © 2024 Ghoms Linguistics - </span>
                        <Link to="#" onClick={handleOpenDataProtectionModal}>Data Protection</Link>
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
    )
}


