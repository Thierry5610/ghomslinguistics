import React, { useEffect, useState } from 'react';
import { Plus, PinIcon, MoreVertical} from 'lucide-react';
import { ActionButton, NumberCounter, SectionHeading, StatusPill, TableBody, TableData, TableHead, TableRow } from '../components/Atoms';
import { getAnnouncements, getCourses, getStats, getStudents, isSession } from '../../SupabaseServices';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router';


const Dashboard = () => {
  const [stats,setStats] = useState([])
  const [announcements,setAnnouncements] = useState([])
  const [students,setStudents] = useState([])
  const [courses,setCourses] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await isSession();
      console.log("session",session)
      if (!session) {
        navigate('/admin');
      } 
    };

    checkSession();
  }, [navigate]);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStats();
      setStats(data || []);
      const data2 = await getAnnouncements();
      setAnnouncements(data2 || []);
      const data3 = await getStudents();
      setStudents(data3 || [])
      const data4 = await getCourses();
      setCourses(data4 || [])
    };
    fetchStats()
  }, []);
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
                  <p className="text-2xl font-medium text-gray-900 mt-1">
                    <NumberCounter number={parseInt(stat.value,10)}/>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Announcements Section */}
      <div className="bg-white rounded-lg shadow text-sm">
        <div className="flex justify-between items-center p-4 border-b">
          <SectionHeading text={"Announcement"}/>
          <ActionButton label={"See All Announcement"} link={true} onClick={()=>navigate('/admin/news')}/>
        </div>
        <div className="divide-y">
          {announcements.filter(a=>a.pinned).map((announcement, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex-1">
                <h3 className="font-semi-bold text-gray-900 mb-1">{announcement.headline}</h3>
                {/* <p className="text-xs text-gray-500">{announcement.created_at}</p> */}
                <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(announcement.created_at))} ago
                </p>
              </div>
              <div className="flex items-center gap-2">
                <PinIcon className="w-4 h-4 text-gray-400" />
                <button>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow text-sm">
        <div className="flex justify-between items-center p-4 border-b">
          <SectionHeading text={"Current Students"}/>
          <ActionButton icon={Plus} label={"Add Student"} onClick={()=>navigate('/admin/students')}/>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <TableHead entries={["Name","Course","Enrollment","Price","Status"]}/>
            <TableBody>
              {students.map((student) => {
                const course = courses.find(course => course.id === student.course);
                return(
                  <TableRow key={student.id}>
                    <TableData>{student.name}</TableData>
                    <TableData>{course? course.name : "N/A"}</TableData>
                    <TableData>{student.enrollmentDate}</TableData>
                    <TableData>{course ? course.price : "N/A"}</TableData>
                    <TableData>
                      <StatusPill status={student.status}/>
                    </TableData>
                  </TableRow>
                )
              })}
            </TableBody>
          </table>
        </div>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-lg shadow text-sm">
        <div className="flex justify-between items-center p-4 border-b">
          <SectionHeading text={"Current Courses"}/>
          <ActionButton icon={Plus} label={"Add Course"} onClick={()=>navigate('/admin/courses')}/>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <TableHead entries={["Course","Location","Enrollment","Price","Status"]}/>
            <TableBody>
              {courses.map((course) => {
                return(
                  <TableRow key={course.id}>
                    <TableData>{course.name}</TableData>
                    <TableData>{course.location}</TableData>
                    <TableData>{course.enrolled}/{course.capacity}</TableData>
                    <TableData>{course.price}</TableData>
                    <TableData>
                      <StatusPill status={course.status}/>
                    </TableData>
                  </TableRow>
                )
              })}
            </TableBody>
          </table>
        </div>
      </div>      
    </div>
  );
};

export default Dashboard;