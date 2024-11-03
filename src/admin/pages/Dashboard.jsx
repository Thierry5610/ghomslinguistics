import React from 'react';
import { Plus, PinIcon, MoreVertical} from 'lucide-react';
import { announcements, stats, studentData } from '../db';
import { ActionButton, SectionHeading, StatusPill, TableBody, TableData, TableHead, TableRow } from '../components/Atoms';

const Dashboard = () => {
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
          <SectionHeading text={"Announcement"}/>
          <ActionButton label={"See All Announcement"} link={true}/>
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
          <SectionHeading text={"Current Students"}/>
          <ActionButton icon={Plus} label={"Add Student"}/>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <TableHead entries={["Name","Course","Start Date","End Date","Price","Status"]}/>
            <TableBody>
              {studentData.map((student) => (
                <TableRow key={student.id}>
                  <TableData>{student.name}</TableData>
                  <TableData>{student.course}</TableData>
                  <TableData>{student.startDate}</TableData>
                  <TableData>{student.endDate}</TableData>
                  <TableData>{student.price}</TableData>
                  <TableData>
                    <StatusPill status={student.status}/>
                  </TableData>
                </TableRow>
              ))}
            </TableBody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;