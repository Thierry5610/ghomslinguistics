import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Styles from './styles/registration_language.module.scss';

export default function Languages() {
    const image = "/images/site-images/table-book-read-open-wood-vintage-674236-pxhere.com_-1024x768.jpg";
    const { t } = useTranslation('languages'); // Use the translation hook for the specific namespace

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.text_section}>
                    <h2>{t('title')}</h2>
                    <p>
                        {t('description')}
                    </p>
                    <div className={Styles.actions}>
                        <Link to="/course/german">{t('germanCourse')}</Link>
                        <Link to="/course/english">{t('englishCourse')}</Link>
                    </div>
                </div>
                <div className={Styles.image_section}>
                    <img src={image} alt="course" />
                </div>
            </div>
        </div>
    );
}
