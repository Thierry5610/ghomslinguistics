import Styles from './styles/registercoursemodal.module.scss';
import {MdPerson,MdCalendarMonth,MdLocationPin, MdBook, MdCalendarToday, MdPersonOutline, MdOutlineBook, MdOutlineLocationOn} from 'react-icons/md'
import { IoMdClose } from "react-icons/io";

export default function RegisterCourseModal({language,onClose}){
    return(
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.close_button} onClick={onClose}>
                    <IoMdClose />
                </div>
                <h1>Register for {language} courses </h1>
                <div className={Styles.cards}>
                    <CourseCard level="A1" location="YDE" startDate="01/03" endDate="01/04" seats={4} price={"200000XAF"}/>
                    <CourseCard level="B1" location="DLA" startDate="01/03" endDate="01/04" seats={4} price={"120000XAF"}/>
                </div>
            </div>
        </div>
    )
}

function CourseCard({level,startDate,endDate,location,seats,price}) {
    return(
        <div className={Styles.card}>
            <div className={Styles.details}>
                <div className={Styles.level}>
                    <MdOutlineBook/>
                    <span>{level}</span>
                </div>
                <div className={Styles.location}>
                    <MdOutlineLocationOn/>
                    <span>{location}</span>
                </div>
                <div className={Styles.timeline}>
                    <MdCalendarToday/>
                    <span>{`${startDate} - ${endDate}`}</span>
                </div>
                <div className={Styles.seats}>
                    <MdPersonOutline/>
                    <span>{seats}</span>
                </div>
                <div className={Styles.price}>{price}</div>
            </div>
            <button className={Styles.cta}>
                Register
            </button>
        </div>
    )
}