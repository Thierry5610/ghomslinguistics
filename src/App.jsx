import "./App.css"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <Navigation />
        <div className="content">
          <Routes>
            <Route index element={<Home/>}/>
          </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App
