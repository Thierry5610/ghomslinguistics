import "./App.css"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";

function App() {
  return (
    <div className="container">
      <Navigation />
        <div className="content">
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App
