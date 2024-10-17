import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Course from "./pages/Course";
import ScrollToTop from "./components/ScrollToTop"; 
import Languages from "./pages/Languages";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="container">
      <Navigation />
      <ScrollToTop />
      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/language" element={<Languages />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/course/:language" element={<Course />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;