import React from 'react';
import { Plus, PinIcon, MoreVertical, Users, BookOpen, BookText, DollarSign } from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const stats = [
    { 
      title: 'Active Students', 
      value: '234',
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      title: 'Active Courses', 
      value: '12',
      icon: BookOpen,
      color: 'bg-green-100 text-green-600'
    },
    { 
      title: 'Publications', 
      value: '45',
      icon: BookText,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      title: 'Total Revenue', 
      value: '$45,678',
      icon: DollarSign,
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  const announcements = [
    { 
      title: 'Outing schedule for every department',
      time: '5 Minutes ago',
      pinned: true
    },
    { 
      title: 'Meeting HR Department',
      time: 'Yesterday, 12:30 PM',
      pinned: true
    },
    { 
      title: 'IT Department need two more talents for UX/UI Designer position',
      time: 'Yesterday, 09:15 AM',
      pinned: true
    }
  ];

  const studentData = [
    { 
      id: 1,
      name: 'John Doe',
      course: 'Advanced English',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      price: '$599',
      status: 'Active'
    },
    { 
      id: 2,
      name: 'Sarah Smith',
      course: 'Business French',
      startDate: '2024-02-01',
      endDate: '2024-07-01',
      price: '$699',
      status: 'Active'
    },
    { 
      id: 3,
      name: 'Mike Johnson',
      course: 'Beginner Spanish',
      startDate: '2024-01-10',
      endDate: '2024-06-10',
      price: '$499',
      status: 'Active'
    }
  ];

  return (
    <div className="p-6 space-y-6">
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
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Announcements Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-900">Announcement</h2>
          <button className="text-amber-500 text-sm">See All Announcement</button>
        </div>
        <div className="divide-y">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">{announcement.title}</h3>
                <p className="text-sm text-gray-500">{announcement.time}</p>
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
      <div className="bg-white rounded-lg shadow">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-900">Current Students</h2>
          <button className="flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Course</th>
                <th className="px-4 py-3 text-left">Start Date</th>
                <th className="px-4 py-3 text-left">End Date</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {studentData.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900">{student.name}</td>
                  <td className="px-4 py-3 text-gray-900">{student.course}</td>
                  <td className="px-4 py-3 text-gray-900">{student.startDate}</td>
                  <td className="px-4 py-3 text-gray-900">{student.endDate}</td>
                  <td className="px-4 py-3 text-gray-900">{student.price}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {student.status}
                    </span>
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

export default Dashboard;