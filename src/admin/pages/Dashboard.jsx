import React from 'react';
import { Plus, PinIcon, MoreVertical} from 'lucide-react';
import { announcements, stats, studentData } from '../db';

const Dashboard = () => {
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
                  <p className="text-2xl font-medium text-gray-900 mt-1">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Announcements Section */}
      <div className="bg-white rounded-lg shadow text-sm">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-base font-medium text-gray-900">Announcement</h2>
          <button className="text-amber-500 text-xs">See All Announcement</button>
        </div>
        <div className="divide-y">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex-1">
                <h3 className="font-semi-bold text-gray-900 mb-1">{announcement.title}</h3>
                <p className="text-xs text-gray-500">{announcement.time}</p>
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
          <h2 className="text-base font-medium text-gray-900">Current Students</h2>
          <button className="flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
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