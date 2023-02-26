import React from "react";
import Card from "./Card/Card";
import "./Cards.css";
import PersonIcon from "@material-ui/icons/Person";
import PieChartIcon from "@material-ui/icons/PieChart";
import EventNoteIcon from "@material-ui/icons/EventNote";
import GroupIcon from "@material-ui/icons/Group";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const Cards = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="card-column">
                <Card icon={<PersonIcon style={{ color: "#f2864d" }} />} title="Active Students" number="1500" />
                <Card icon={<EventNoteIcon style={{ color: "#d88ec6" }} />} title="Today's Enquires" number="400" />
                <Card icon={<EventNoteIcon style={{ color: "#d88ec6" }} />} title="Test Assigned in last 7 Days" number="120" />
            </div>
            <div className="card-column">
                <Card icon={<PieChartIcon style={{ color: "#245ba1" }} />} title="Center Perfomance" number="88%" />
                <Card icon={<GroupIcon style={{ color: "#245ba1" }} />} title="Today's Enrolments" number="50" />
                <Card icon={<EventNoteIcon style={{ color: "#d88ec6" }} />} title="Test Attempted in last 7 Days" number="100" />
            </div>
            <div className="card-column">
                <Card icon={<AccountBalanceWalletIcon style={{ color: "#52c6b1" }} />} title="Today's Fee Due" number="20000" />
                <Card icon={<AttachMoneyIcon style={{ color: "#52c6b1" }} />} title="Today's Fee Collection" number="40000" />
                <Card icon={<EventNoteIcon style={{ color: "#d88ec6" }} />} title="Test Evaluated in last 7 days" number="20" />
            </div>
            <div className="card-column">
                <Card icon={<AccountBalanceWalletIcon style={{ color: "#52c6b1" }} />} title="Next 7 Days Fee Due" number="80000" />
                <Card icon={<EventNoteIcon style={{ color: "#d88ec6" }} />} title="Today's Follow ups" number="180" />
                <Card icon={<EventNoteIcon style={{ color: "#d88ec6" }} />} title="Pending Follow ups Till date" number="88" />
            </div>
        </div>
    );
};

export default Cards;
