
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./pages/Login";
// import Users from "./pages/Users";
// import EditUser from "./pages/EditUser";
// import Navbar from "./pages/Navbar"; 

// import "./App.css";


// function App() {
//   return (
//     <Router>
//       <div className="background-animation"></div>
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="/edit-user" element={<EditUser />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import Navbar from "./pages/Navbar";
// import SplashBackground from "./SplashBackground";



import "./App.css";

function App() {
  return (
    <Router>
      {/* <SplashBackground /> Background animation added here */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
