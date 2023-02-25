import React from "react";
import TargetVSEnrolment from "./TragetVSEnrolment/TargetVSEnrolment";
import ActiveStudents from "./ActiveStudents/ActiveStudents";
import "./Charts.css";

const Charts = () => {
    return (
        <div className="d-flex justify-content-between mx-3">
            <div className="TargetVSEnrolment border border-2 me-3">
                <TargetVSEnrolment />
            </div>
            <div className="ActiveStudents border border-2 ms-3">
                <ActiveStudents />
            </div>
        </div>
    );
};

export default Charts;
