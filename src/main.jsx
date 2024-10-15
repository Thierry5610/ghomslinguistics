// Main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Dashboard from './admin/Dashboard.jsx';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Course from './pages/Course';
import Languages from './pages/Languages';
import Registration from './pages/Registration';
import './i18n';

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
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
