import "./App.css"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Course from "./pages/Course";

function App() {
  return (
    <div className="container">
      <Navigation />
        <div className="content">
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/course/:langauge" element={<Course/>}/>
          </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App
