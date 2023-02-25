import React from "react";
import "./CourseDue.css";
import Calender from "./Calender/Calender";
import CourseExp from "./CourseExp/CourseExp";

const CourseDue = () => {
    return (
        <div className="d-flex justify-content-between mx-3">
            <div className="CourseExp border border-2 me-3 my-3">
                <CourseExp />
            </div>
            <div className="Calender border border-2 ms-3 my-3">
                <Calender />
            </div>
        </div>
    );
};

export default CourseDue;
