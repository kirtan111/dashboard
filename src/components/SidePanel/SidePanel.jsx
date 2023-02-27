import React from "react";
import logo from "../../Assets/logo.png";
import "./SidePanel.css";
import Titles from "./Titles/Titles";

const SidePanel = () => {
    return (
        <div className="sidepanel d-flex">
            <img src={logo} alt="logo" />
            <Titles title="Dashboard" />
            <Titles title="Admin" />
            <Titles title="Students" />
            <Titles title="Programs" />
            <Titles title="Employees" />
            <Titles title="Reports" />
            <Titles title="Support" />
            <Titles title="Student Notification" />
        </div>
    );
};

export default SidePanel;
