import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../layout/Footer";

let Signup = () => {
    let history = useHistory();
    toast.configure();

    let [userState, setUserState] = useState({
        name: "",
        email: "",
        password: "",
    });

    let [userErrorState, setUserErrorState] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
    });

    // validate User
    let validateUser = (event) => {
        setUserState({ ...userState, name: event.target.value });
        let regExp = /^[a-zA-Z0-9_]{5,10}$/;
        !regExp.test(event.target.value)
            ? setUserErrorState({
                ...userErrorState,
                nameError: "Enter a Proper Name",
            })
            : setUserErrorState({ ...userErrorState, nameError: "" });
    };

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

    let submitRegister = (event) => {
        event.preventDefault();
        let data = {
            userState,
        };
        console.log("data", data);

        Axios.post("/api/signup", userState)
            .then((res) => {
                console.log("res", res.data.msg);

                toast(res.data.msg);
                history.push("/signin");
            })
            .catch((err) => {
                console.log("err", err.response.data.errors[0].msg);
                toast.error(err.response.data.errors[0].msg);
            });
        setUserState({
            ...userState,
            name: "",
            email: "",
            password: "",
        });
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <section className="bg-brown text-white p-2 bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 font-weight-bold">Signup Here</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <pre>{JSON.stringify(userState)}</pre>
                <pre>{JSON.stringify(userErrorState)}</pre>*/}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto">
                                <div className="card">
                                    <div className="card-header bg-dark text-white">
                                        <p className="h3">Signup Here</p>
                                    </div>
                                    <div className="card-body bg-form-light">
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    value={userState.name}
                                                    onChange={validateUser}
                                                    type="text"
                                                    className={`form-control ${userErrorState.nameError.length > 0
                                                        ? "is-invalid"
                                                        : ""
                                                        }`}
                                                    placeholder="Name"
                                                />
                                                {userErrorState.nameError.length > 0 ? (
                                                    <small className="text-danger font-weight-bold">
                                                        {userErrorState.nameError}
                                                    </small>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                            <div className="form-group mt-3">
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
                                                    onClick={submitRegister}
                                                >
                                                    Signup
                                                </button>
                                            </div>
                                            <span>
                                                Already have an Account?
                                                <Link to="/signin">
                                                    <strong>SignIn</strong>
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
                <Footer />

            </React.Fragment>
        </React.Fragment>
    );
};
export default Signup;
