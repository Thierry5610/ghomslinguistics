// App.jsx
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="container">
      <Navigation />
      <ScrollToTop />
      <div className="content">
        {/* Outlet serves as a placeholder for nested routes */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
