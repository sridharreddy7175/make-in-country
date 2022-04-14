import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{
                    background: "linear-gradient(45deg,#000,#2f4f4f)",
                }}
            >
                <div className="container">
                    <Link className="navbar-brand text-white" to="#">
                        App Manager
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/">
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/apps">
                                    AppsList
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/signup">
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
