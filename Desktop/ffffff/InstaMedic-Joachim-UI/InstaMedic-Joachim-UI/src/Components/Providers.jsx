import React from "react";
import "./Providers.css"
import ProfileCard from "./ProfileCard";




function Providers() {
    return (
        <>
            <div id="pro-section">
                <div id="pro-banner">
                    <h1>MediCare Providers</h1>
                </div>

                <div id="pro-items">
                    <div className="tableprofile">
                        <div id="pro-category">


                            <table className="cat-table">
                                <caption id="cat-quest">Whats your reason for Visit <br />
                                    <span>Choose a Category</span></caption>

                                <tr>
                                    <td id="td">
                                        <a href=""> General</a>
                                    </td>
                                    <td id="td">
                                        <a href="">Mental health</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td id="td">
                                        <a href="">Skin</a>
                                    </td>
                                    <td id="td">
                                        <a href="">Child care</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td id="td">
                                        <a href="">Men's Health</a>
                                    </td>
                                    <td id="td">
                                        <a href="">Women's Health</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td id="td">

                                        <a href="">Prescription</a>
                                    </td>
                                    <td id="td">
                                        <a href="">Reviews</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td id="td">
                                        <a href="">Referrals</a>
                                    </td>
                                    <td id="td">
                                        <a href="">other</a>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div id="pro-appointment">

                            <table className="pro-appo">

                                <caption id="pro-question">Choose appointment type</caption>
                                <tr>
                                    <td><a href=""> Eye Issues</a></td>
                                    <td><a href="">Weight Loss</a></td>
                                </tr>

                                <tr>
                                    <td><a href="">Birth Control</a></td>
                                    <td><a href="">Medical Form</a></td>
                                </tr>

                                <tr>
                                    <td><a href="">Dental issues</a></td>
                                    <td><a href="">Mental Health</a></td>
                                </tr>

                                <tr>
                                    <td> <a href="">Joint pain </a></td>
                                    <td><a href="">Optometry</a></td>
                                </tr>

                                <tr>
                                    <td><a href="">Skin issues</a></td>
                                    <td><a href="">Nutrition</a></td>
                                </tr>

                            </table>
                        </div>
                    </div>
                    <div className="Profile">
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                        <ProfileCard/>
                        
                        
                    </div>


                </div>
            </div>
        </>
    );
}

export default Providers;
