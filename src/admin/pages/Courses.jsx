import React, { useEffect, useState } from 'react';
import { 
  Search, 
  Plus, 
  ChevronDown,
  Clock,
  Users,
  Calendar,
  DollarSign,
  Pencil,
  Trash2,
} from 'lucide-react';
import AddCourseModal from '../components/AddCourseModal';
import { ActionButton, ConfirmAlert, EmptyState, PageHeading, SearchBar, StatusPill, TableBody, TableData, TableHead, TableRow } from '../components/Atoms';
import { deleteCourse, getCourses, isSession } from '../../SupabaseServices';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';


const CoursesPage = () => {
  const {t} = useTranslation('adminCourse')
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [courseToDelete, setCourseToDelete] = useState(null); // Track the course to delete
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    language: '',
    level: '',
    status: ''
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfirmAlertOpen, setIsConfirmAlertOpen] = useState(false); // Track if confirm alert is open

  const navigate = useNavigate()
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await isSession();

      if (!session) {
        navigate('/admin');
      } 
    };

    checkSession();
  }, [navigate]);
  
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setCourses(data || []);
    };
    fetchCourses();
  }, []);

  const openConfirmAlert = (course) => {
    setCourseToDelete(course); 
    setIsConfirmAlertOpen(true);
  };

  const handleDeleteConfirmed = async (confirmed) => {
    setIsConfirmAlertOpen(false);
    if (confirmed && courseToDelete) {
      await deleteCourse(courseToDelete.id);
      setCourses(courses.filter(c => c.id !== courseToDelete.id));
      setCourseToDelete(null);
    }
  };

  // Filter options
  const filterOptions = {
    language: ['English', 'German'],
    level: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    status: ['Active', 'Enrolling', 'Full']
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = !filters.language || course.language === filters.language;
    const matchesLevel = !filters.level || course.level === filters.level;
    const matchesStatus = !filters.status || course.status === filters.status;
    
    return matchesSearch && matchesLanguage && matchesLevel && matchesStatus;
  });

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <PageHeading text={t("Courses")}/>
          <ActionButton label={t("AddCourse")} icon={Plus} onClick={() => setIsAddModalOpen(true)}/>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 text-gray-700 text-sm">
          {/* Search */}
          <SearchBar
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder={t("SearchPlaceholder")}
          />

          {/* Filters */}
          <div className="flex gap-2">
            {Object.entries(filterOptions).map(([key, options]) => (
              <div key={key} className="relative text-gray-700">
                <select
                  className="appearance-none pl-3 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  value={filters[key]}
                  onChange={(e) => setFilters(prev => ({ ...prev, [key]: e.target.value }))}
                >
                  <option value="">{t(`${key.charAt(0).toUpperCase() + key.slice(1)}`)}</option>
                  {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <TableHead entries={[t("Course"),t("Location"),t("Enrollment"),t("Price"),t("Status"),t("Actions")]}/>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableData>
                      <div className="flex flex-col">
                        <span>{course.name}</span>
                        <span className="text-xs text-gray-500">{course.instructor}</span>
                      </div>
                    </TableData>
                    <TableData>
                      <div className="flex flex-col text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {course.location}
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="w-4 h-4 mr-1" />
                          {`${course.startTime}-${course.endTime}`}
                        </div>
                      </div>
                    </TableData>
                    <TableData>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1 text-gray-500" />
                        <span className="text-gray-900">{course.enrolled}/{course.capacity}</span>
                      </div>
                    </TableData>
                    <TableData>
                      <div className="flex items-center">
                        {course.price}
                      </div>
                    </TableData>
                    <TableData>
                      <StatusPill status={course.status}/>
                    </TableData>
                    <TableData>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setCurrentCourse(course);
                            setIsAddModalOpen(true);
                          }}
                          className="text-gray-400 hover:text-amber-500"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => openConfirmAlert(course)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </TableData>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </div>
        </div>
        
        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <EmptyState text={t("EmptyState")}/>
        )}
      </div>

      {isAddModalOpen && (
        <AddCourseModal 
          setCourses={setCourses} 
          currentCourse={currentCourse} 
          setCurrrentCourse={setCurrentCourse} 
          isOpen={isAddModalOpen} 
          setIsOpen={setIsAddModalOpen} 
          courses={courses}
        />
      )}

      {isConfirmAlertOpen && (
        <ConfirmAlert 
          heading={t("DeleteModalPrompt")} 
          text={t('DeleteModalPrompt')} 
          onConfirm={handleDeleteConfirmed} 
          setShow={setIsConfirmAlertOpen}
        />
      )}
    </>
  );
};

export default CoursesPage;
