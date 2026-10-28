// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home/Home";
// import Footer from "./components/Footer";
// import CourseDetails from "./pages/Detailes/CourseDetails";
// import About from "./pages/Home/About/About";
// import Blogs from "./pages/Blogs/Blogs";
// import Contact from "./pages/contact/Contact";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";


// export default function App() {
//   return (
//     <div>
//     <BrowserRouter>
//       <Navbar />
  
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/courses/:slug"
//           element={<CourseDetails />}
//         />

//         <Route  path="/about"
//         element={<About/>} />

//             <Route  path="/blogs"
//         element={<Blogs/>} />

//         <Route path="/contact" 
//         element={<Contact />} />
//       </Routes>


//       <Footer />

// <Route path="/login" element={<Login />} />
// <Route path="/register" element={<Register />} />
//     </BrowserRouter>


//     </div>
//   )
// }
 


import React from 'react'
import { BrowserRouter } from "react-router";
import AppRoutes from './Routs/AppRoutes';


export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

