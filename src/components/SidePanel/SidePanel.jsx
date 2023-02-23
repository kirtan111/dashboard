import React from "react";
import logo from "../../Assets/logo.png";
import "./SidePanel.css";
// import admin from "../../Assets/admin.png";
// import angel_right from "../../Assets/angel-right.png";
// import dashboard from "../../Assets/dashboard.png";
// import employees from "../../Assets/employees.png";
// import program from "../../Assets/programs.png";
// import report from "../../Assets/report.png";
// import student_notification from "../../Assets/student_notification.png";
// import student from "../../Assets/student.png";
// import support from "../../Assets/support.png";

const SidePanel = () => {
    return (
        <div className="sidepanel">
            <img src={logo} alt="logo" />
            {/* <span>
                Dashboard <img src={dashboard} />{" "}
            </span> */}
            <span active>Dashboard</span>
            <span>Admin</span>
            <span>Students</span>
            <span>Programs</span>
            <span>Employees</span>
            <span>Reports</span>
            <span>Support</span>
            <span>Student Notification</span>
        </div>
    );
};

export default SidePanel;
