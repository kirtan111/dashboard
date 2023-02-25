import React from "react";
import "./CourseExp.css";

const CourseExp = () => {
    return (
        <div>
            <p className="tablelabel my-4 ms-3 fw-bolder fs-4">Course Expiring Soon</p>
            <div>
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Program</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Course Expiry Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>#198485</td>
                            <td>Mayur Domadiya</td>
                            <td>IELTS</td>
                            <td>MD_#01234</td>
                            <td>20-02-2022</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>#198485</td>
                            <td>Kirta Thummar</td>
                            <td>PTE</td>
                            <td>KT_#01234</td>
                            <td>20-02-2022</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>#198485</td>
                            <td>Jay Shah</td>
                            <td>CELPIP</td>
                            <td>JS_#01234</td>
                            <td>20-02-2022</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>#198485</td>
                            <td>Vijay Mallya</td>
                            <td>TOEFL</td>
                            <td>VM_#01234</td>
                            <td>20-02-2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseExp;
