import Styles from './styles/registercoursemodal.module.scss';
import { MdPersonOutline, MdCalendarToday, MdOutlineBook, MdOutlineLocationOn, MdOutlineTimer3, MdOutlineWatch } from 'react-icons/md';
import { IoMdClose } from "react-icons/io";
import { useEffect } from 'react';
import { LuCalendarDays, LuClock, LuMapPin, LuTag } from 'react-icons/lu';

export default function RegisterCourseModal({ language, onClose, onOpenCta }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.closeButton} onClick={onClose}>
                    <IoMdClose />
                </div>
                <h1>Register for {language} courses</h1>
                <div className={Styles.cards}>
                    <CourseCard level="A1" location="Yaounde" startDate="01/03" endDate="01/04" duration={4} price={"200000 XAF"} action={onOpenCta} />
                    <CourseCard level="B1" location="Douala" startDate="01/03" endDate="01/04" duration={4} price={"120000 XAF"} action={onOpenCta} />
                </div>
            </div>
        </div>
    );
}

function CourseCard({ level, startDate, endDate, location, duration, price, action }) {
    return (
        <div className={Styles.card}>
            <div className={Styles.cardHeader}>{level}</div>
            <div className={Styles.cardContent}>
                <div className={Styles.cardItem}>
                    <LuMapPin/>
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>Location</span>
                        <span className={Styles.cardItemValue}>{location}</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuCalendarDays/>
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>Date</span>
                        <span className={Styles.cardItemValue}>{`${startDate} - ${endDate}`}</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuClock/>
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>Duration</span>
                        <span className={Styles.cardItemValue}>{duration} hours/day</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuTag/>
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>Price</span>
                        <span className={Styles.cardItemValue}>{price}</span>
                    </div>
                </div>
            </div>
            <button className={Styles.registerBtn} onClick={action}>Register Now</button>
        </div>
    );
}
