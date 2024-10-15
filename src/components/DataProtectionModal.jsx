import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Styles from './styles/dataprotection.module.scss';
import { IoMdClose } from "react-icons/io";

export const DataProtectionModal = ({ onClose, onContact }) => {
    const { t } = useTranslation('dataProtectionModal');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className={Styles.modal} aria-hidden="false" aria-modal="true" role="dialog">
            <div className={Styles.content}>
                <button className={Styles.close_button} onClick={onClose} aria-label={t('closeModal')}>
                    <IoMdClose />
                </button>
                <h1>{t('modalTitle')}</h1>
                <div className={Styles.text_content}>
                    <h2>{t('introductionTitle')}</h2>
                    <p>{t('introductionText')}</p>
                    <h3>{t('dataCollectionTitle')}</h3>
                    <p>{t('dataCollectionPurpose')}</p>
                    <ul>
                        {t('dataCollectionList', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('personalDataCollected')}</p>
                    <ul>
                        {t('personalDataList', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h3>{t('useOfPersonalDataTitle')}</h3>
                    <p>{t('useOfPersonalDataText')}</p>
                    <ul>
                        {t('useOfPersonalDataList', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('noMarketingText')}</p>
                    <h3>{t('dataSharingTitle')}</h3>
                    <p>{t('dataSharingText')}</p>
                    <ul>
                        {t('dataSharingList', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h3>{t('dataSecurityTitle')}</h3>
                    <p>{t('dataSecurityText')}</p>
                    <h3>{t('dataRetentionTitle')}</h3>
                    <p>{t('dataRetentionText')}</p>
                    <h3>{t('yourRightsTitle')}</h3>
                    <p>{t('yourRightsText')}</p>
                    <ul>
                        {t('yourRightsList', { returnObjects: true }).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t('exerciseRightsText')}</p>
                    <h3>{t('changesToDeclarationTitle')}</h3>
                    <p>{t('changesToDeclarationText')}</p>
                    <h3>{t('contactInformationTitle')}</h3>
                    <p>{t('contactInformationText')}</p>
                    <p>
                        {t('contactDetails.name')}<br />
                        {t('contactDetails.addressDouala')}<br />
                        {t('contactDetails.addressYaounde')}<br />
                        {t('contactDetails.email')}<br />
                        {t('contactDetails.phone')}
                    </p>
                </div>
                <div className={Styles.button_group}>
                    <button className={Styles.accept_button} onClick={onClose}>{t('acceptButton')}</button>
                    <button className={Styles.contact_button} onClick={onContact}>{t('contactButton')}</button>
                </div>
            </div>
        </div>
    );
};

DataProtectionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onContact: PropTypes.func.isRequired,
};
