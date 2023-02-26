import React from "react";
import logo from "../../Assets/logo.png";
import "./SidePanel.css";
import Titles from "./Titles/Titles";

const SidePanel = () => {
    return (
        <div className="sidepanel d-flex">
            <img src={logo} alt="logo" />
            <Titles title="Dashboard"></Titles>
            <Titles title="Admin"></Titles>
            <Titles title="Students"></Titles>
            <Titles title="Programs"></Titles>
            <Titles title="Employees"></Titles>
            <Titles title="Reports"></Titles>
            <Titles title="Support"></Titles>
            <Titles title="Student Notification"></Titles>
        </div>
    );
};

export default SidePanel;
