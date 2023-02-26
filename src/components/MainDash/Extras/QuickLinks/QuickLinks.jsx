import React from "react";
import "./QuickLinks.css";

const QuickLinks = () => {
    return (
        <div>
            <div className="mx-3 my-3 fw-bolder fs-4">Quick Links</div>
            <div className="links d-flex flex-column d-flex mx-3">
                <a className="card my-3" href="/" style={{ backgroundColor: "#0d6efd" }}>
                    ADD ENQUIRIES
                </a>
                <a className="card my-3" href="/">
                    ADD ENROLMENTS
                </a>
                <a className="card my-3" href="/">
                    FEE DUES
                </a>
            </div>
        </div>
    );
};

export default QuickLinks;
