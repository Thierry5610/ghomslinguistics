import React, { useState } from 'react';
import { Search, Plus, Pencil, Trash2, X } from 'lucide-react';

const Students = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8900',
      course: 'English B2',
      enrollmentDate: '2024-01-15',
      status: 'Active',
      address: '123 Main St, City',
      dateOfBirth: '1995-06-20'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234-567-8901',
      course: 'French A1',
      enrollmentDate: '2024-02-01',
      status: 'Active',
      address: '456 Oak Ave, Town',
      dateOfBirth: '1998-03-15'
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [errors, setErrors] = useState({});

  const courses = ['English B2', 'French A1', 'German A1', 'Spanish A2', 'Italian B1'];
  const statuses = ['Active', 'Inactive', 'On Leave', 'Graduated', 'Withdrawn'];

  const validateForm = (student) => {
    const newErrors = {};
    if (!student.name?.trim()) newErrors.name = 'Required';
    if (!student.email?.trim()) newErrors.email = 'Required';
    if (!student.course) newErrors.course = 'Required';
    if (!student.phone?.trim()) newErrors.phone = 'Required';
    if (!student.enrollmentDate) newErrors.enrollmentDate = 'Required';
    if (!student.status) newErrors.status = 'Required';
    if (!student.dateOfBirth) newErrors.dateOfBirth = 'Required';
    
    // Basic email validation
    if (student.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    // Basic phone validation
    if (student.phone && !/^\+?[\d\s-]{10,}$/.test(student.phone)) {
      newErrors.phone = 'Invalid phone format';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const formErrors = validateForm(currentStudent);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (currentStudent.id) {
      setStudents(students.map(s => s.id === currentStudent.id ? currentStudent : s));
    } else {
      setStudents([...students, { ...currentStudent, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Students</h1>
        <button
          onClick={() => {
            setCurrentStudent({});
            setErrors({});
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
        >
          <Plus size={16} />
          <span className="text-sm">Add Student</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search students by name, email, or phone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Contact Info</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Course</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Enrollment</th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.map(student => (
              <tr key={student.id} className="hover:bg-stone-50">
                <td className="px-4 py-3">
                  <div className="text-sm text-gray-900">{student.name}</div>
                  <div className="text-xs text-gray-500">{student.dateOfBirth}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm text-gray-600">{student.email}</div>
                  <div className="text-sm text-gray-600">{student.phone}</div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{student.course}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                    student.status === 'Active' ? 'bg-green-100 text-green-800' :
                    student.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
                    student.status === 'On Leave' ? 'bg-yellow-100 text-yellow-800' :
                    student.status === 'Graduated' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{student.enrollmentDate}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    onClick={() => {
                      setCurrentStudent(student);
                      setErrors({});
                      setShowModal(true);
                    }}
                    className="text-gray-400 hover:text-amber-500"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Delete this student?')) {
                        setStudents(students.filter(s => s.id !== student.id));
                      }
                    }}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {currentStudent.id ? 'Edit Student' : 'Add Student'}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={currentStudent.name || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, name: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={currentStudent.email || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, email: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={currentStudent.phone || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, phone: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="+1 234-567-8900"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={currentStudent.dateOfBirth || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, dateOfBirth: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${
                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.dateOfBirth && <p className="mt-1 text-xs text-red-500">{errors.dateOfBirth}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  value={currentStudent.address || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  placeholder="Street address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                <select
                  value={currentStudent.course || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, course: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${
                    errors.course ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select a course</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                {errors.course && <p className="mt-1 text-xs text-red-500">{errors.course}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Date</label>
                <input
                  type="date"
                  value={currentStudent.enrollmentDate || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, enrollmentDate: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${
                    errors.enrollmentDate ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.enrollmentDate && <p className="mt-1 text-xs text-red-500">{errors.enrollmentDate}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={currentStudent.status || ''}
                  onChange={(e) => setCurrentStudent({...currentStudent, status: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg text-sm ${
                    errors.status ? 'border-red-500' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select status</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                {errors.status && <p className="mt-1 text-xs text-red-500">{errors.status}</p>}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm hover:bg-amber-600"
                >
                  {currentStudent.id ? 'Save Changes' : 'Add Student'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-8 bg-stone-50 rounded-lg">
          <p className="text-gray-500 text-sm">No students found</p>
        </div>
      )}
    </div>
  );
};

export default Students;