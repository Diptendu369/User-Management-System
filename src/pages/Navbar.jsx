import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">User Management</h2>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/users" onClick={() => setMenuOpen(false)}>
            User List
          </Link>
        </li>
        <li>
          <Link to="/edit-user" onClick={() => setMenuOpen(false)}>
            Edit User
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
