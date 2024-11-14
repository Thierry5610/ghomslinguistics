import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { ActionButton, ConfirmAlert, EmptyState, PageHeading, SearchBar, StatusPill, TableBody, TableData, TableHead, TableRow } from '../components/Atoms';
import AddStudentModal from '../components/AddStudentModal';
import { deleteStudent, getCourseNames, getStudents } from '../../SupabaseServices';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showConfirmAlert, setShowConfirmAlert] = useState(false); // State to control ConfirmAlert visibility
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data || []);
      const data2 = await getCourseNames();
      setCourses(data2 || []);
    };
    fetchStudents();
  }, []);

  const handleDeleteClick = (student) => {
    setCurrentStudent(student);
    setShowConfirmAlert(true); // Show the confirm alert
  };

  const confirmDeleteStudent = async () => {
    if (currentStudent) {
      await deleteStudent(currentStudent.id);
      setStudents(students.filter(s => s.id !== currentStudent.id));
      setShowConfirmAlert(false); // Hide the confirm alert
      setCurrentStudent(null); // Clear the selected student
    }
  };

  const displayStudents = students.map((student) => {
    const course = courses.find((c) => c.id === student.course);
    return {
      ...student,
      course: course ? course.name : student.course,
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
        <div className="flex justify-between items-center">
          <PageHeading text={"Students"} />
          <ActionButton 
            label={"Add Student"} 
            icon={Plus} 
            onClick={() => {
              setCurrentStudent({});
              setShowModal(true);
            }}
          />
        </div>

        <SearchBar
          placeholder={"Search students by name, email, or phone..."}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <TableHead entries={["Name", "Contact Info", "Course", "Status", "Enrollment", "Actions"]} />
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
                    <StatusPill status={student.status} />
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
                        onClick={() => handleDeleteClick(student)}
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

        {filteredStudents.length === 0 && (
          <EmptyState text={"No students found"} />
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

      {showConfirmAlert && (
        <ConfirmAlert 
          show={showConfirmAlert} 
          onConfirm={confirmDeleteStudent} 
          onCancel={() => setShowConfirmAlert(false)} 
          message="Are you sure you want to delete this student?"
        />
      )}
    </>
  );
};

export default Students;
