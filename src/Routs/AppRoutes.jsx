
import { Routes, Route, useLocation } from "react-router";

// Shared components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Pages
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/Detailes/CourseDetails";
import About from "../pages/Home/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export default function AppRoutes() {
  const location = useLocation();

  // Pages without Navbar and Footer
  const authPages = ["/login", "/register"];

  const isAuthPage = authPages.includes(
    location.pathname.replace(/\/+$/, "") || "/"
  );

  return (
    <>
      {/* Show Navbar only on normal pages */}
      {!isAuthPage && <Navbar />}

      {/* All website routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/courses/:slug"
          element={<CourseDetails />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/contact" element={<Contact />} />

        {/* Authentication pages */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Show Footer only on normal pages */}
      {!isAuthPage && <Footer />}
    </>
  );
}
