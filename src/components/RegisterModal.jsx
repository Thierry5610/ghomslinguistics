import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Styles from './styles/contact.module.scss';
import { IoMdClose } from "react-icons/io";
import sendRegistrationEmail from '../utils/emailUtil';
import { Alert } from '../admin/components/Atoms';

const RegisterModal = ({ course, onClose }) => {
    const { t } = useTranslation('registerModal');
    const [user, setUser] = useState({ name: '', surname: '', email: '' });
    const [showFailureAlert, setShowFailureAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const showSuccess = () => {
        setShowSuccessAlert(true);
        setTimeout(() => {
            setShowSuccessAlert(false);
            onClose();
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.name || !user.surname || !user.email) {
            setShowFailureAlert(true);
            return;
        }

        setLoading(true);
        const emailStatus = await sendRegistrationEmail(course, user);
        setLoading(false);

        if (emailStatus) {
            showSuccess();
        } else {
            setShowFailureAlert(true);
        }
    };

    return (
        <>
            <div className={Styles.modal}>
                <div className={Styles.content}>
                    <button
                        className={Styles.close_button}
                        onClick={onClose}
                        aria-label={t('closeButton')}
                    >
                        <IoMdClose />
                    </button>
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
                        <button
                            type="submit"
                            className={Styles.cta}
                            disabled={loading}
                        >
                            {loading ? t('loading') : t('registerButton')}
                        </button>
                    </form>
                </div>
            </div>
            {showFailureAlert && (
                <Alert
                    heading={t('errorHeading')}
                    text={t('mailNotSent')}
                    setShow={setShowFailureAlert}
                    type={"error"}
                />
            )}
            {showSuccessAlert && (
                <Alert
                    heading={t('successHeading')}
                    text={t('mailSentSuccessfully')}
                    setShow={setShowSuccessAlert}
                    type={"success"}
                />
            )}
        </>
    );
};

export default RegisterModal;
