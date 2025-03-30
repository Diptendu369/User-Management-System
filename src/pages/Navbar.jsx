// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { FiMenu, FiX } from "react-icons/fi";
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".dropdown-toggle").forEach((button) => {
//       button.addEventListener("click", function () {
//         let dropdownContainer = this.closest(".dropdown-container");
//         let dropdown = dropdownContainer.querySelector(".dropdown-menu");
//         let userList = document.querySelector(".user-list");

//         // Toggle dropdown visibility
//         let isExpanded = dropdown.classList.contains("show");

//         // Close all dropdowns before opening another
//         document.querySelectorAll(".dropdown-menu").forEach((menu) => {
//           menu.classList.remove("show");
//         });
//         document
//           .querySelectorAll(".dropdown-container")
//           .forEach((container) => {
//             container.classList.remove("expanded");
//           });

//         if (!isExpanded) {
//           dropdown.classList.add("show");
//           dropdownContainer.classList.add("expanded");
//         }

//         // Adjust user list position
//         let openDropdown = document.querySelector(
//           ".dropdown-container.expanded"
//         );
//         if (openDropdown) {
//           userList.style.marginTop = "60px"; // Moves content down
//         } else {
//           userList.style.marginTop = "0"; // Resets if closed
//         }
//       });
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener("click", function (event) {
//       if (!event.target.closest(".dropdown-container")) {
//         document.querySelectorAll(".dropdown-menu").forEach((menu) => {
//           menu.classList.remove("show");
//         });
//         document
//           .querySelectorAll(".dropdown-container")
//           .forEach((container) => {
//             container.classList.remove("expanded");
//           });
//         document.querySelector(".user-list").style.marginTop = "0"; // Reset
//       }
//     });
//   });
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <h2 className="logo">User Management</h2>
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FiX /> : <FiMenu />}
//       </div>
//       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link to="/users" onClick={() => setMenuOpen(false)}>
//             User List
//           </Link>
//         </li>
//         <li>
//           <Link to="/edit-user" onClick={() => setMenuOpen(false)}>
//             Edit User
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">User Management</h2>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation Links */}
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
