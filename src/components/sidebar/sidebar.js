import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <ul className="sidebar">
        <li className="sidebar-list">Home page</li>
        <Link to="/product-list" className="sidebar-list">
          <li className="sidebar-list">product List</li>
        </Link>
        <li className="sidebar-list">view cart</li>
        <li className="sidebar-list">view profile</li>
        <li className="sidebar-list">contact us</li>
        <li className="sidebar-list">Enquiry</li>
      </ul>
    </div>
  );
}

export default Sidebar;
