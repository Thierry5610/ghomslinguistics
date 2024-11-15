// Main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Course from './pages/Course';
import Languages from './pages/Languages';
import Registration from './pages/Registration';
import './i18n';
import Admin from './admin/Admin.jsx';
import Dashboard from './admin/pages/Dashboard.jsx';
import CoursesPage from './admin/pages/Courses.jsx';
import Students from './admin/pages/Student.jsx';
import Announcements from './admin/pages/Announcement.jsx';
import NotFound from './admin/components/NotFound.jsx';
import Settings from './admin/pages/Settings.jsx';
import Login from './admin/pages/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Nested routes under App */}
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="language" element={<Languages />} />
          <Route path="register" element={<Registration />} />
          <Route path="course/:language" element={<Course />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<Login/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='courses' element={<CoursesPage/>}/>
          <Route path='news' element={<Announcements/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path ='students' element={<Students/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);