import React from "react";
import ActiveStudents from "./ActiveStudents/ActiveStudents";
import TargetVSEnrolment from "./TragetVSEnrolment/TargetVSEnrolment";
import "./Charts.css";

const Charts = () => {
    return (
        <div className="d-flex justify-content-between border mx-3">
            <div className="ActiveStudents border">
                <ActiveStudents />
            </div>
            <div className="TargetVSEnrolment border">
                <TargetVSEnrolment />
            </div>
        </div>
    );
};

export default Charts;
