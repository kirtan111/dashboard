import React from "react";
import Cards from "./Cards/Cards";
import Navbar from "./NavBar/Navbar";
import Charts from "./Charts/Charts";
import CourseDue from "./CourseDue/CourseDue";
import Extras from "./Extras/Extras";

const MainDash = () => {
    return (
        <div className="maindash">
            <Navbar />
            <Cards />
            <Charts />
            <CourseDue />
            <Extras />
        </div>
    );
};

export default MainDash;
