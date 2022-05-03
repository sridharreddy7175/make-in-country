import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signoutUser } from "../../redux/users/user_action";

const Navbar = (props) => {
    const history = useHistory();
    const signout = () => {
        props.signoutUser();
        history.push("/");
    };
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
                        {props?.details?.msg === "Login is Success" ? (
                            <ul className="navbar-nav ml-auto">
                                {props?.details?.user?.isAdmin === true ? (
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link text-white"
                                                to="/admin/dashboard"
                                            >
                                                AdminDashboard
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="navbar-nav ml-auto">
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

                                        <li className="nav-item">
                                            <Link
                                                className="nav-link text-white"
                                                to="/user/dashboard"
                                            >
                                                UserDashboard
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                                <li className="nav-item">
                                    <Link
                                        className="nav-link text-white"
                                        to="/signup"
                                        onClick={signout}
                                    >
                                        SignOut
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ml-auto">
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
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/signup">
                                        Signup
                                    </Link>
                                </li>


                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default connect(
    (state) => ({
        details: state.user.user,
    }),

    { signoutUser }
)(Navbar);
