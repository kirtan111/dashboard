import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const Calender = () => {
    const [value, onChange] = useState([new Date(), new Date()]);

    return (
        <div>
            <Calendar className="calendar rounded-3" onChange={onChange} value={value} selectRange={true} />
        </div>
    );
};

export default Calender;
