import React from "react";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

const Titles = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebarTitle">
                <span>
                    {props.title} <ChevronRightRoundedIcon />
                </span>
            </div>
        </div>
        // <div className="sidebar">
        //     <div className="sidebarDetails">
        //         <p className="sidebarTitle">{props.title}</p>
        //     </div>
        //     <div className="sidebarIcon">
        //         <span>
        //             <ChevronRightRoundedIcon />
        //         </span>
        //     </div>
        // </div>
    );
};

export default Titles;
