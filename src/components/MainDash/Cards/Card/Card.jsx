import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="icon">
                <span>{props.icon}</span>
            </div>
            <div className="details">
                <p className="title">{props.title}</p>
                <b>{props.number}</b>
            </div>
        </div>
    );
};

export default Card;
