import { Link } from 'react-router-dom'
import Styles from './styles/registration_language.module.scss'
export default function Languages() {
    const image = "/images/site-images/table-book-read-open-wood-vintage-674236-pxhere.com_-1024x768.jpg"
    return(
        <div className={Styles.container}>
           <div className={Styles.content}>
                <div className={Styles.text_section}>
                    <h2>German and English courses for every level – learn now!</h2>
                    <p>
                        Discover our German and English courses, which are specifically 
                        designed to help you learn or improve your language skills. 
                        Whether you are a beginner or advanced learner, we offer tailor-made 
                        courses for every level, both online and on-site. 
                        Join our community and take the next step towards fluent German or English!
                    </p>
                    <div className={Styles.actions}>
                        <Link to="/course/german">German Course</Link>
                        <Link to="/course/english">English Course</Link>
                    </div>
                </div>
                <div className={Styles.image_section}>
                    <img src={image} alt="course" />
                </div>
           </div>
        </div>
    )
}