import React, { useEffect, useState } from 'react';
import { Search, Plus, Pencil, Trash2, X } from 'lucide-react';
import { ActionButton, EmptyState, PageHeading, SearchBar, StatusPill, TableBody, TableData, TableHead, TableRow } from '../components/Atoms';
import AddStudentModal from '../components/AddStudentModal';
import { deleteStudent, getCourseNames, getStudents } from '../../SupabaseServices';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [courses,setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data || []);
      const data2 = await getCourseNames();
      setCourses(data2 || [])
    };
    fetchStudents();
  }, []);
  
  const handleDeleteStudent = async (student) => {
    if (window.confirm('Delete this course?')) {
      await deleteStudent(student.id);
      setStudents(students.filter(c => c.id !== student.id));
    }
  };

  // const courses = ['English B2', 'French A1', 'German A1', 'Spanish A2', 'Italian B1'];
  console.log(courses)

  const displayStudents = students.map((student) => {
    // Find the course object that matches the student's course ID
    const course = courses.find((c) => c.id === student.course);
    
    // Return a new student object with the course ID replaced by the course name
    return {
      ...student,
      course: course ? course.name : student.course, // If no match, keep the original course ID
    };
  });

  const statuses = ['Active', 'Inactive', 'On Leave', 'Graduated', 'Withdrawn'];

  const filteredStudents = displayStudents.filter(student =>
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
                        onClick={() => {handleDeleteStudent(student)}}
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
          <EmptyState text={"No students found"}/>
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