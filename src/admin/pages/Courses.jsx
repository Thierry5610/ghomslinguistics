import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter,
  ChevronDown,
  Clock,
  Users,
  BookOpen,
  Calendar,
  DollarSign,
  MoreVertical
} from 'lucide-react';

const CoursesPage = () => {
  // Mock data for courses
  const initialCourses = [
    {
      id: 1,
      name: 'English B2',
      language: 'English',
      level: 'B2',
      instructor: 'Dr. Sarah Wilson',
      duration: '12 weeks',
      schedule: 'Mon, Wed, Fri',
      time: '09:00 - 10:30',
      enrolled: 18,
      capacity: 25,
      price: 799,
      status: 'Active',
      startDate: '2024-03-15',
      type: 'Group'
    },
    {
      id: 2,
      name: 'German A1',
      language: 'German',
      level: 'A1',
      instructor: 'Prof. Hans Mueller',
      duration: '10 weeks',
      schedule: 'Tue, Thu',
      time: '14:00 - 16:00',
      enrolled: 12,
      capacity: 20,
      price: 699,
      status: 'Enrolling',
      startDate: '2024-04-01',
      type: 'Group'
    },
    {
      id: 3,
      name: 'English C1',
      language: 'English',
      level: 'C1',
      instructor: 'Dr. John Smith',
      duration: '16 weeks',
      schedule: 'Mon, Wed, Fri',
      time: '11:00 - 12:30',
      enrolled: 15,
      capacity: 15,
      price: 999,
      status: 'Full',
      startDate: '2024-03-20',
      type: 'Group'
    },
    {
      id: 4,
      name: 'German B1',
      language: 'German',
      level: 'B1',
      instructor: 'Prof. Anna Schmidt',
      duration: '12 weeks',
      schedule: 'Tue, Thu',
      time: '18:00 - 19:30',
      enrolled: 8,
      capacity: 20,
      price: 799,
      status: 'Active',
      startDate: '2024-03-10',
      type: 'Group'
    }
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    language: '',
    level: '',
    status: ''
  });

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

  // Status badge styles
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Enrolling':
        return 'bg-blue-100 text-blue-800';
      case 'Full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semi-bold text-gray-900">Courses</h1>
        <button className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 text-sm">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search courses or instructors..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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
            <thead className="bg-stone-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Enrollment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm text-nowrap divide-stone-200">
              {filteredCourses.map((course) => (
                <tr key={course.id} className="hover:bg-stone-50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-700">{course.name}</span>
                      <span className="text-sm text-gray-500">{course.instructor}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-sm">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-1" />
                        {course.schedule}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.time}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-gray-400" />
                      <span className="text-gray-900">{course.enrolled}/{course.capacity}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-700">
                      <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                      {course.price}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(course.status)}`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;