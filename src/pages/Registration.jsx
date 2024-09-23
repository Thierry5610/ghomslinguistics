import { Link } from 'react-router-dom'
import Styles from './styles/registration_language.module.scss'
export default function Registration() {
    const image = "https://ghomslinguistics.com/wp-content/uploads/2024/08/school-1063556_1920-1024x756.jpg"
    return(
        <div className={Styles.container}>
           <div className={Styles.content}>
                <div className={Styles.text_section}>
                    <h2>REGISTRATION FOR OUR LANGUAGE COURSES</h2>
                    <p>
                        Register for our language courses – new courses start every month! 
                        Improve your German skills flexibly and individually. 
                        Register now and get started next month!
                    </p>
                    <div className={Styles.actions}>
                        <Link to="/language">Language Courses</Link>
                        <Link to="/language">Exam Preparation</Link>
                    </div>
                </div>
                <div className={Styles.image_section}>
                    <img src={image} alt="course" />
                </div>
           </div>
        </div>
    )
}