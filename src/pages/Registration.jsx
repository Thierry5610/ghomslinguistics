import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Styles from './styles/registration_language.module.scss';

export default function Registration() {
    const image = "/images/site-images/school-1063556_1920-1024x756.jpg";
    const { t } = useTranslation('registration'); // Use the 'registration' namespace

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.text_section}>
                    <h2>{t('title')}</h2>
                    <p>
                        {t('description')}
                    </p>
                    <div className={Styles.actions}>
                        <Link to="/language">{t('languageCourses')}</Link>
                        <Link to="/language">{t('examPreparation')}</Link>
                    </div>
                </div>
                <div className={Styles.image_section}>
                    <img src={image} alt="course" />
                </div>
            </div>
        </div>
    );
}
