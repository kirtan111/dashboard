import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            {/* <div className="m-4 w-100 flex-fill text-bg-light"> */}
            <div className="details">
                <p className="title">{props.title}</p>
                <b>{props.number}</b>
            </div>
        </div>
    );
};

export default Card;
