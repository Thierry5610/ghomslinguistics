import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Styles from './styles/registercoursemodal.module.scss';
import { IoMdClose } from 'react-icons/io';
import { LuCalendarDays, LuClock, LuMapPin, LuTag } from 'react-icons/lu';
import { getCourses } from '../SupabaseServices';
import { stripYear } from '../utils/quickUtils';

export default function RegisterCourseModal({ language, onClose, onOpenCta,setCourse }) {
    const { t } = useTranslation('registerCourseModal');
    const [courses,setCourses] = useState([])
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Array of course objects
    useEffect(() => {
        const fetchCourses = async () => {
          const data = await getCourses();
          const filterLanguage = data.filter(datum=>datum.language.toLowerCase()===language.toLowerCase())
          setCourses(filterLanguage || []);
        };
        fetchCourses();
      }, []);
    
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.closeButton} onClick={onClose}>
                    <IoMdClose />
                </div>
                <h1>{language=='english'?t('registerTitle.english'):t('registerTitle.german')}</h1>
                <div className={Styles.cards}>
                    {courses.length>0?courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            level={course.level}
                            location={course.location}
                            startDate={course.startDate}
                            endDate={course.endDate}
                            startTime={course.startTime}
                            endTime={course.endTime}
                            price={course.price}
                            action={()=>{
                                setCourse(course)
                                onOpenCta()
                            }}
                        />
                    )):<div>{t('emptyState')}</div>}
                </div>
            </div>
        </div>
    );
}

export function CourseCard({ level, startDate, endDate, location, startTime, endTime, price, action }) {
    const { t } = useTranslation('registerCourseModal');

    return (
        <div className={Styles.card}>
            <div className={Styles.cardHeader}>{level}</div>
            <div className={Styles.cardContent}>
                <div className={Styles.cardItem}>
                    <LuMapPin />
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>{t('locationLabel')}</span>
                        <span className={Styles.cardItemValue}>{location}</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuCalendarDays />
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>{t('dateLabel')}</span>
                        <span className={Styles.cardItemValue}>{`${stripYear(startDate)} - ${stripYear(endDate)}`}</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuClock />
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>{t('durationLabel')}</span>
                        <span className={Styles.cardItemValue}>{`${startTime} - ${endTime}`}</span>
                    </div>
                </div>
                <div className={Styles.cardItem}>
                    <LuTag />
                    <div className={Styles.cardItemText}>
                        <span className={Styles.cardItemLabel}>{t('priceLabel')}</span>
                        <span className={Styles.cardItemValue}>{price}</span>
                    </div>
                </div>
            </div>
            <button className={Styles.registerBtn} onClick={action}>{t('registerButton')}</button>
        </div>
    );
}
