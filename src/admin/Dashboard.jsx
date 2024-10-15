// Import necessary libraries and icons
import { LuHome, LuBookOpen, LuUser, LuCalendar, LuGlobe } from 'react-icons/lu';
import './styles/styles.css'

export default function Dashboard() {
  return (
    <div className="flex h-screen dash">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Courses" value="24" icon={<LuBookOpen size={24} />} />
            <StatsCard title="Active Students" value="156" icon={<LuUser size={24} />} />
            <StatsCard title="Upcoming Classes" value="8" icon={<LuCalendar size={24} />} />
            <StatsCard title="Languages Offered" value="12" icon={<LuGlobe size={24} />} />
          </div>

          {/* Actions */}
          <div className="mt-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ActionButton text="Add New Course" />
              <ActionButton text="Enroll Student" />
              <ActionButton text="Schedule Class" />
              <ActionButton text="Generate Report" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <img src="https://via.placeholder.com/150x50?text=GHOMS+LINGUISTICS" alt="GHOMS Linguistics" className="mb-6" />
      </div>
      <nav className="mt-6">
        <NavLink href="#" text="Dashboard" icon={<LuHome size={20} />} />
        <NavLink href="#" text="Courses" icon={<LuBookOpen size={20} />} />
        <NavLink href="#" text="Students" icon={<LuUser size={20} />} />
        <NavLink href="#" text="Schedule" icon={<LuCalendar size={20} />} />
      </nav>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center">
          <span className="text-gray-600 mr-4">Admin User</span>
          <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/32" alt="User avatar" />
        </div>
      </div>
    </header>
  );
};

// StatsCard Component
const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3 text-white">{icon}</div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="text-lg font-semibold text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

// ActionButton Component
const ActionButton = ({ text }) => {
  return (
    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
      {text}
    </button>
  );
};

// NavLink Component for Sidebar Links
const NavLink = ({ href, text, icon }) => {
  return (
    <a href={href} className="flex items-center py-2 px-4 text-base text-gray-600 hover:bg-gray-200">
      <span className="mr-3">{icon}</span>
      {text}
    </a>
  );
};
