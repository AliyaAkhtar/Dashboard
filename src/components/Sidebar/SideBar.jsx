import React from 'react'
import './SideBar.css'
import { FaHome } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";

const SideBar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <FaHome />
          <a href="#">Home</a>
        </li>
        <li className="menu-item">
          <IoAnalyticsSharp />
          <a href="#">Analytics</a>
        </li>
        <li className="menu-item">
          <TbReportSearch />
          <a href="#">Reports</a>
        </li>
        <li className="menu-item">
          <IoSettingsSharp />
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar