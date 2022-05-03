import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { SigninUser } from "../../redux/users/user_action";



let Signin = (props) => {
    let history = useHistory();

    let [userState, setUserState] = useState({
        email: "",
        password: "",
    });

    let [userErrorState, setUserErrorState] = useState({
        emailError: "",
        passwordError: "",
    });

    // validate Email
    let validateEmail = (event) => {
        setUserState({ ...userState, email: event.target.value });
        let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        !regExp.test(event.target.value)
            ? setUserErrorState({
                ...userErrorState,
                emailError: "Enter a Proper Email",
            })
            : setUserErrorState({ ...userErrorState, emailError: "" });
    };

    // validate Password
    let validatePassword = (event) => {
        setUserState({ ...userState, password: event.target.value });
        let regExp = /^[a-zA-Z0-9_]\w{6,14}$/;
        !regExp.test(event.target.value)
            ? setUserErrorState({
                ...userErrorState,
                passwordError: "Enter a Proper Password",
            })
            : setUserErrorState({ ...userErrorState, passwordError: "" });
    };

    let submitLogin = async (event) => {
        event.preventDefault();
        await props.SigninUser(userState);
        history.push('/')
        setUserState({
            ...userState,
            email: "",
            password: ""
        })
    };


    return (
        <React.Fragment>
            <section className="bg-dark text-white p-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 font-weight-bold">Signin Here</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <p className="h3">Signin Here</p>
                                </div>
                                <div className="card-body bg-form-light">
                                    <form onSubmit={submitLogin}>
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                value={userState.email}
                                                onChange={validateEmail}
                                                type="email"
                                                className={`form-control ${userErrorState.emailError.length > 0
                                                    ? "is-invalid"
                                                    : ""
                                                    }`}
                                                placeholder="Email"
                                            />
                                            {userErrorState.emailError.length > 0 ? (
                                                <small className="text-danger font-weight-bold">
                                                    {userErrorState.emailError}
                                                </small>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="form-group mt-3">
                                            <input
                                                name="password"
                                                value={userState.password}
                                                onChange={validatePassword}
                                                type="password"
                                                className={`form-control ${userErrorState.passwordError.length > 0
                                                    ? "is-invalid"
                                                    : ""
                                                    }`}
                                                placeholder="Password"
                                            />
                                            {userErrorState.passwordError.length > 0 ? (
                                                <small className="text-danger font-weight-bold">
                                                    {userErrorState.passwordError}
                                                </small>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="mt-2 mb-2">
                                            <button
                                                type="submit"
                                                className="btn btn-dark btn-sm text-brown form-control w-25"
                                            >
                                                Signin
                                            </button>
                                        </div>
                                        <span>
                                            New to Create Account ?
                                            <Link to="/signup">
                                                <strong> Signup</strong>
                                            </Link>
                                        </span>
                                    </form>
                                </div>
                                <div className="card-footer bg-dark text-center text-white">
                                    Make In Country

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default connect(
    (state) => ({
        details: state.user,
    }),

    { SigninUser }
)(Signin);