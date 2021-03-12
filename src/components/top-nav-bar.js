import React from "react";
import ChartContainer from "./chart-container";

export default function TopNavMajor() {
    return (
        <div id="top-bar" className="top-bar tops row-frame">
            <div className="logo_container">
                <img className="img-pos" src="../media/images/alethea_logo_name.svg" alt="logo"/>
            </div>
            <div className="collapsible-menu-bar-container row-frame">
                <a className="top-nav-link">
                    <div className="nav-link-container">
                        <div className="nav-link-div full-height full-width row-frame hor-center vert-center">
                            <span className="nav-link">Home</span>
                        </div>
                        <div className="dropdown-div">
                            <div className="d-t-tip"></div>
                            <ul className="dropdown-container">
                                <li className="dropdown-list-item">games</li>
                                <li className="dropdown-list-item">blabla</li>
                                <li className="dropdown-list-item">background</li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a className="top-nav-link">
                    <div className="nav-link-container">
                        <div className="nav-link-div full-height full-width row-frame hor-center vert-center">
                            <span className="nav-link">Settings</span>
                        </div>
                        <div className="dropdown-div">
                            <div className="d-t-tip"></div>
                            <ul className="dropdown-container">
                                <li className="dropdown-list-item">games</li>
                                <li className="dropdown-list-item">blabla</li>
                                <li className="dropdown-list-item">background</li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a className="top-nav-link">
                    <div className="nav-link-container">
                        <div className="nav-link-div full-height full-width row-frame hor-center vert-center">
                            <span className="nav-link">More</span>
                        </div>
                        <div className="dropdown-div">
                            <div className="d-t-tip"></div>
                            <ul className="dropdown-container">
                                <li className="dropdown-list-item">games</li>
                                <li className="dropdown-list-item">blabla</li>
                                <li className="dropdown-list-item">background</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <a className="top-nav-link">
                    <div className="nav-link-container">
                        <div className="nav-link-div full-height full-width row-frame hor-center vert-center">
                            <span className="nav-link">News</span>
                        </div>
                        <div className="dropdown-div">
                            <div className="d-t-tip"></div>
                            <ul className="dropdown-container">
                                <li className="dropdown-list-item">games</li>
                                <li className="dropdown-list-item">blabla</li>
                                <li className="dropdown-list-item">background</li>
                            </ul>
                        </div>
                    </div>
                </a>

                <a className="top-nav-link">
                    <div className="nav-link-container">
                        <div className="nav-link-div full-height full-width row-frame hor-center vert-center">
                            <span className="nav-link">Sign up</span>
                        </div>
                        <div className="dropdown-div">
                            <div className="d-t-tip"></div>
                            <ul className="dropdown-container">
                                <li className="dropdown-list-item">games</li>
                                <li className="dropdown-list-item">blabla</li>
                                <li className="dropdown-list-item">background</li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a className="top-nav-link">
                    <div className="nav-link-container">
                        <div className="nav-link-div full-height full-width row-frame hor-center vert-center">
                            <span className="nav-link">Login</span>
                        </div>
                        <div className="dropdown-div">
                            <div className="d-t-tip"></div>
                            <ul className="dropdown-container">
                                <li className="dropdown-list-item">games</li>
                                <li className="dropdown-list-item">blabla</li>
                                <li className="dropdown-list-item">background</li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a className="top-nav-link" id="toogle-menu-show">
                    <div className="nav-link-container row-frame hor-center vert-center">
                        <div className="grid">
                            <div className="menu cross menu--1 full-width full-height">
                                <label className="row-frame hor-center full-width full-height">
                                    <input className="toogler" type="checkbox"/>
                                        <svg className="menu-btn col-frame" viewBox="0 0 100 100"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle className="circle" cx="50" cy="50" r="45"/>
                                            <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35"/>
                                            <path className="line--2" d="M0 50h70"/>
                                            <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65"/>
                                        </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

