import React from "react";
import "./Ticket.css";
import EventNoteIcon from "@material-ui/icons/EventNote";

const Ticket = () => {
    return (
        <div>
            <div className="fw-bolder fs-4 mx-3 my-3">Tickets</div>
            <div className="Tickets">
                <div className="details">
                    <p className="title">Pending Appointments</p>
                    <b>30</b>
                </div>
                <div className="icon">
                    <span>
                        <EventNoteIcon />
                    </span>
                </div>
            </div>
            <hr className="mx-4" />
            <div className="Tickets">
                <div className="details">
                    <p className="title">Total Appointments</p>
                    <b>50</b>
                </div>
                <div className="icon">
                    <span>
                        <EventNoteIcon />
                    </span>
                </div>
            </div>
            <hr className="mx-4" />
            <div className="Tickets">
                <div className="details">
                    <p className="title">Cancelled Appointments</p>
                    <b>20</b>
                </div>
                <div className="icon">
                    <span>
                        <EventNoteIcon />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
