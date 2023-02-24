// import React from "react";
// import "./Navbar.css";
// import profile from "../../../Assets/profile.png";
// import dashboard from "../../../Assets/dashboard.png";
// import student_notification from "../../../Assets/student_notification.png";

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <span>
//                 <img src={dashboard} alt="dashboard" /> Dashboard
//             </span>

//             <div className="navbar-end">
//                 <input type="search" placeholder="Search" />

//                 <span>
//                     <img src={student_notification} alt="notification" />
//                 </span>

//                 <div className="profile">
//                     <img src={profile} alt="profile" />
//                     <span>Om Butani</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../../../Assets/profile.png";
import dashboard from "../../../Assets/dashboard.png";
import student_notification from "../../../Assets/student_notification.png";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={dashboard} alt="" width="30" height="24" className="m-2" />
                        <span className="mx-3">Dashboard</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <form className="d-flex">
                            <input className="form-control m-2" type="search" placeholder="Search..." aria-label="Search" />
                            <img src={student_notification} alt="" width="30" height="24" className="m-3" />
                            <p className="m-3" color="">
                                |
                            </p>
                            <img src={profile} alt="" width="50" height="50" borderradius="50%" className="mx-2 mt-1 rounded-circle" />
                            <a className="navbar-brand m-2" href="/">
                                Om Butani{" "}
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
