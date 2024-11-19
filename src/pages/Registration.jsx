import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Styles from './styles/registration_language.module.scss';
import { useEffect, useState } from 'react';
import { getCourses } from '../SupabaseServices';
import { LuCalendarDays, LuClock, LuMapPin, LuTag } from 'react-icons/lu';
import { stripYear } from '../utils/quickUtils';
import { Search } from 'lucide-react';
import RegisterModal from '../components/RegisterModal';


export default function Registration() {
    const { t } = useTranslation('registration'); // Use the 'registration' namespace
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [isRegisterModalOpen,setIsRegisterModalOpen] = useState(false)
    const [selectedCourse,setSelectedCourse] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses();
            setCourses(data);
            setFilteredCourses(data);
        };
        fetchCourses();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = courses.filter(
            (course) =>
                course.level.toLowerCase().includes(query) ||
                course.location.toLowerCase().includes(query) ||
                course.startDate.toLowerCase().includes(query) ||
                course.endDate.toLowerCase().includes(query) ||
                course.price.toString().includes(query)
        );

        setFilteredCourses(filtered);
    };

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.heading}>
                        <h2>{t('allCourses')}</h2>
                    </div>
                    <div className={Styles.searchBar}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder={t('searchPlaceholder')}
                            className={Styles.input}
                        />
                        <Search className={Styles.icon} />
                    </div>
                    <div className={Styles.cards}>
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                                <CourseCard
                                    key={index}
                                    level={course.level}
                                    location={course.location}
                                    startDate={course.startDate}
                                    endDate={course.endDate}
                                    startTime={course.startTime}
                                    endTime={course.endTime}
                                    price={course.price}
                                    action={() => {
                                        setSelectedCourse(course)
                                        setIsRegisterModalOpen(true)
                                    }}
                                />
                            ))
                        ) : (
                            <p>{t('noCoursesFound')}</p>
                        )}
                    </div>
                </div>
            </div>        
            {isRegisterModalOpen&&<RegisterModal course={selectedCourse} onClose={()=>setIsRegisterModalOpen(false)}/>}
        </>
    );
}


function CourseCard({ level, startDate, endDate, location, startTime, endTime, price, action }) {
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