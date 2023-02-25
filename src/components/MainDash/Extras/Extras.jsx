import React from "react";
import QuickLinks from "./QuickLinks/QuickLinks";
import Ticket from "./Ticket/Ticket";
import TodoList from "./TodoList/TodoList";
import "./Extras.css";

const Extras = () => {
    return (
        <div className="d-flex justify-content-between mx-3">
            <div className="TodoList border border-2 me-3">
                <TodoList />
            </div>
            <div className="Ticket border border-2 mx-1">
                <Ticket />
            </div>
            <div className="QuickLinks border border-2 ms-3">
                <QuickLinks />
            </div>
        </div>
    );
};

export default Extras;
