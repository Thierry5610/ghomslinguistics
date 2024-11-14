import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Styles from './styles/contact.module.scss';
import { IoMdClose } from "react-icons/io";
import sendRegistrationEmail from '../utils/emailUtil';

const RegisterModal = ({ course, onClose }) => {
    const { t } = useTranslation('registerModal');
    const [user, setUser] = useState({ name: '', surname: '', email: '' });

    useEffect(() => {
        console.log(course);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send email with course and user information
        const emailStatus = await sendRegistrationEmail(course, user);
        if (emailStatus) {
            alert('Registration email sent successfully!');
        } else {
            alert('Failed to send registration email.');
        }
    };

    return (
        <div className={Styles.modal}>
            <div className={Styles.content}>
                <div className={Styles.close_button} onClick={onClose}>
                    <IoMdClose />
                </div>
                <h1>{t('formTitle')}</h1>
                <form className={Styles.contact_form} onSubmit={handleSubmit}>
                    <input
                        className={Styles.form_input}
                        type="text"
                        placeholder={t('namePlaceholder')}
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                    <input
                        className={Styles.form_input}
                        type="text"
                        placeholder={t('surnamePlaceholder')}
                        value={user.surname}
                        onChange={(e) => setUser({ ...user, surname: e.target.value })}
                    />
                    <input
                        className={Styles.form_input}
                        type="email"
                        placeholder={t('emailPlaceholder')}
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <button type="submit" className={Styles.cta}>
                        {t('registerButton')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
