import React from "react";
import Card from "./Card/Card";

const Cards = () => {
    return (
        <div className="px-2 d-flex justify-content-between">
            <div>
                <Card title="Active Students" number="1500" />
                <Card title="Today's Enquires" number="400" />
                <Card title="Test Assigned in last 7 Days" number="120" />
            </div>
            <div>
                <Card title="Center Perfomance" number="88%" />
                <Card title="Today's Enrolments" number="50" />
                <Card title="Test Attempted in last 7 Days" number="100" />
            </div>
            <div>
                <Card title="Today's Fee Due" number="20000" />
                <Card title="Today's Fee Collection" number="40000" />
                <Card title="Test Evaluated in last 7 days" number="20" />
            </div>
            <div>
                <Card title="Next 7 Days Fee Due" number="80000" />
                <Card title="Today's Follow ups" number="180" />
                <Card title="Pending Follow ups Till date" number="88" />
            </div>
        </div>
    );
};

export default Cards;
