import React, { useState } from 'react';
import { Search, Plus, Pencil, Trash2, X } from 'lucide-react';
import { ActionButton, PageHeading, SearchBar, StatusPill, TableBody, TableData, TableHead, TableRow } from '../components/Atoms';
import AddStudentModal from '../components/AddStudentModal';

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

  const courses = ['English B2', 'French A1', 'German A1', 'Spanish A2', 'Italian B1'];
  const statuses = ['Active', 'Inactive', 'On Leave', 'Graduated', 'Withdrawn'];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <PageHeading text={"Students"}/>

          <ActionButton 
            label={"Add Student"} 
            icon={Plus} 
            onClick={
              ()=>{
                setCurrentStudent({});
                setShowModal(true);
              }
            }
          />
        </div>

        {/* Search */}
        <SearchBar
          placeholder={"Search students by name, email, or phone..."}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <TableHead entries={["Name","Contact Info","Course","Status","Enrollment","Actions"]}/>
            <TableBody>
              {filteredStudents.map(student => (
                <TableRow key={student.id}>
                  <TableData>
                    <div className="text-sm text-gray-900">{student.name}</div>
                    <div className="text-xs text-gray-500">{student.dateOfBirth}</div>
                  </TableData>
                  <TableData>
                    <div className="text-sm text-gray-600">{student.email}</div>
                    <div className="text-sm text-gray-600">{student.phone}</div>
                  </TableData>
                  <TableData>{student.course}</TableData>
                  <TableData>
                    <StatusPill status={student.status}/>
                  </TableData>
                  <TableData>{student.enrollmentDate}</TableData>
                  <TableData>
                    <div className='flex gap-2'>
                      <button
                        onClick={() => {
                          setCurrentStudent(student);
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
                    </div>
                  </TableData>
                </TableRow>
              ))}
            </TableBody>
          </table>
        </div>

        {/* Modal */}

        {/* Empty State */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-8 bg-stone-50 rounded-lg">
            <p className="text-gray-500 text-sm">No students found</p>
          </div>
        )}
      </div>
      {showModal && (
        <AddStudentModal 
          showModal={showModal} 
          setShowModal={setShowModal} 
          statuses={statuses}
          courses={courses}
          setStudents={setStudents}
          currentStudent={currentStudent}
          students={students}
          setCurrentStudent={setCurrentStudent}
        />
      )}    
    </>
  );
};

export default Students;