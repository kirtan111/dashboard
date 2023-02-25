import React from "react";
import "./QuickLinks.css";

const QuickLinks = () => {
    return (
        <div>
            <div className="mx-3 my-3 fw-bolder fs-4">Quick Links</div>
            <div className="links d-flex flex-column d-flex mx-3">
                <p className="card my-3">ADD ENQUIRIES</p>
                <p className="card my-3">ADD ENROLMENTS</p>
                <p className="card my-3">FEE DUES</p>
            </div>
        </div>
    );
};

export default QuickLinks;
