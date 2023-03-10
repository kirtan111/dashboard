import React from "react";
import SidePanel from "../components/SidePanel/SidePanel";
import MainDash from "../components/MainDash/MainDash";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <SidePanel />
            <MainDash />
        </div>
    );
};

export default App;
