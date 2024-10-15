import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Styles from './styles/contact.module.scss';
import { IoMdClose } from "react-icons/io";

const ContactModal = ({ onClose }) => {
    const { t } = useTranslation('contactModal');

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
                <h1>{t('contactTitle')}</h1>
                <form className={Styles.contact_form}>
                    <input
                        className={Styles.form_input}
                        type="text"
                        placeholder={t('namePlaceholder')}
                    />
                    <input
                        className={Styles.form_input}
                        type="email"
                        placeholder={t('emailPlaceholder')}
                    />
                    <input
                        className={Styles.form_input}
                        type="text"
                        placeholder={t('subjectPlaceholder')}
                    />
                    <textarea
                        name="message"
                        className={Styles.form_textarea}
                        placeholder={t('messagePlaceholder')}
                    />
                    <button className={Styles.button} type="submit">
                        {t('sendButton')}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;
