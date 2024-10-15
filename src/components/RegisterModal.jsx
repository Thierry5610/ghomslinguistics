import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Styles from './styles/contact.module.scss';
import { IoMdClose } from "react-icons/io";

const RegisterModal = ({ course, onClose }) => {
    const { t } = useTranslation('registerModal');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className={Styles.modal}>
            <div className={Styles.content}>
                <div className={Styles.close_button} onClick={onClose}>
                    <IoMdClose />
                </div>
                <h1>{t('formTitle')}</h1>
                <form className={Styles.contact_form}>
                    <input
                        className={Styles.form_input}
                        type="text"
                        placeholder={t('namePlaceholder')}
                    />
                    <input
                        className={Styles.form_input}
                        type="text"
                        placeholder={t('surnamePlaceholder')}
                    />
                    <input
                        className={Styles.form_input}
                        type="tel"
                        placeholder={t('telephonePlaceholder')}
                    />
                    <input
                        className={Styles.form_input}
                        type="text"
                        placeholder={t('emailPlaceholder')}
                    />
                    <textarea
                        name="message"
                        className={Styles.form_textarea}
                        placeholder={t('messagePlaceholder')}
                    />
                    <button type="submit" className={Styles.cta}>
                        {t('registerButton')}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;
