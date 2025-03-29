
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Novatrix } from "uvcanvas";

import Login from "./pages/Login";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import Navbar from "./pages/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {/* Background Canvas */}
      <div className="background">
        <Novatrix />
      </div>

      {/* Main Content */}
      <div className="content">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
