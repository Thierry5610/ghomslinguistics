import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  ChevronDown,
  Clock,
  Users,
  Calendar,
  DollarSign,
} from 'lucide-react';
import { initialCourses } from '../db';
import AddCourseModal from '../components/AddCourseModal';
import { ActionButton, PageHeading, SearchBar, StatusPill, TableBody, TableData, TableHead, TableRow } from '../components/Atoms';

const CoursesPage = () => {
  // Mock data for courses
  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    language: '',
    level: '',
    status: ''
  });
  const [isAddModalOpen,setIsAddModalOpen] = useState(false)
  const handleAddCourse = (newCourse) => {
    setCourses([...courses, { ...newCourse, id: Date.now()}]);
  };

  // Filter options
  const filterOptions = {
    language: ['English', 'German'],
    level: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    status: ['Active', 'Enrolling', 'Full']
  };

  // Filter courses based on search and filters
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
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <PageHeading text={"Courses"}/>
          <ActionButton label={"Add Course"} icon={Plus} onClick={()=>setIsAddModalOpen(true)}/>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 text-gray-700 text-sm">
          {/* Search */}
          <SearchBar
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder={"Search courses or instructors..."}
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
                  <option value="">{key.charAt(0).toUpperCase() + key.slice(1)}</option>
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
              <TableHead
                entries={["Course","Schedule","Enrollment","Price","Status"]}
              />
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
                          {course.schedule}
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.time}
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
                        <DollarSign className="w-4 h-4 mr-1 text-gray-500" />
                        {course.price}
                      </div>
                    </TableData>
                    <TableData>
                      <StatusPill status={course.status}/>
                    </TableData>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </div>
        </div>
      </div>
      <AddCourseModal isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} onAddCourse={handleAddCourse}/>
    </>
  );
};

export default CoursesPage;


