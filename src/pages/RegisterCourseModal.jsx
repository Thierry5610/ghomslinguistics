import Styles from './styles/registercoursemodal.module.scss';
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

    // Array of course objects
    const courses = [
        {
            level: "A1",
            location: "Yaoundé",
            startDate: "01/03",
            endDate: "01/04",
            duration: 4,
            price: "200000 XAF"
        },
        {
            level: "B1",
            location: "Douala",
            startDate: "01/03",
            endDate: "01/04",
            duration: 4,
            price: "120000 XAF"
        },
        {
            level: "C1",
            location: "Yaoundé",
            startDate: "05/03",
            endDate: "05/04",
            duration: 5,
            price: "250000 XAF"
        },
        {
            level: "A2",
            location: "Douala",
            startDate: "10/03",
            endDate: "10/04",
            duration: 3,
            price: "150000 XAF"
        }
        // Add more courses as needed
    ];

    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.closeButton} onClick={onClose}>
                    <IoMdClose />
                </div>
                <h1>Register for {language} courses</h1>
                <div className={Styles.cards}>
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            level={course.level}
                            location={course.location}
                            startDate={course.startDate}
                            endDate={course.endDate}
                            duration={course.duration}
                            price={course.price}
                            action={onOpenCta}
                        />
                    ))}
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
                    <LuMapPin />
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>Location</span>
                        <span className={Styles.cardItemValue}>{location}</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuCalendarDays />
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>Date</span>
                        <span className={Styles.cardItemValue}>{`${startDate} - ${endDate}`}</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuClock />
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>Duration</span>
                        <span className={Styles.cardItemValue}>{duration} hours/day</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuTag />
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
