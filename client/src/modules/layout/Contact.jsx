import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Contact = () => {
    const [contactState, setContactState] = useState({
        name: "",
        email: "",
        appName: "",
        info: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const [contactErrorState, setContactErrorState] = useState({
        nameError: "",
        emailError: "",
        appNameError: "",
        infoError: "",
    });

    // validate User
    let validateName = (event) => {
        // console.log("event", event);
        setContactState({ ...contactState, name: event.target.value });
        let regExp = /^([a-zA-Z $.]){2,30}$/;
        !regExp.test(event.target.value)
            ? setContactErrorState({
                ...contactErrorState,
                nameError: "Enter a Proper Name",
            })
            : setContactErrorState({ ...contactErrorState, nameError: "" });
    };

    let validateEmail = (event) => {
        setContactState({ ...contactState, email: event.target.value });
        let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        !regExp.test(event.target.value)
            ? setContactErrorState({
                ...contactErrorState,
                emailError: "Enter a Proper Email",
            })
            : setContactErrorState({ ...contactErrorState, emailError: "" });
    };

    let validateAppName = (event) => {
        setContactState({ ...contactState, appName: event.target.value });
        !event.target.value
            ? setContactErrorState({
                ...contactErrorState,
                appNameError: "Enter a Proper appName",
            })
            : setContactErrorState({ ...contactErrorState, appNameError: "" });
    };

    let validateInfo = (event) => {
        setContactState({ ...contactState, info: event.target.value });
        !event.target.value
            ? setContactErrorState({
                ...contactErrorState,
                infoError: "Enter a Proper Info",
            })
            : setContactErrorState({ ...contactErrorState, infoError: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Sending");

        let data = {
            contactState,
        };
        console.log("data", data)

        if (
            !contactState.name ||
            !contactState.email ||
            !contactState.appName ||
            !contactState.info
        ) {
            alert("Please Fill the form");
        } else {
            fetch("/api/contact1", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then(async (res) => {
                // console.log(await res.status,"email status ");
                return new Promise((resolve, reject) => {
                    // console.log("Response received");
                    if (res.status === 200) {
                        // console.log("Response succeeded!");
                        alert("Thanks For Contacting US");
                        setSubmitted(true);
                        setContactState({
                            name: "",
                            email: "",
                            appName: "",
                            info: ""

                        });
                    } else {
                        alert("SERVER IS BUSY TRY AGIAN LATER");

                        setSubmitted(false);
                    }
                });
            });
        }
    };

    return (

        <div style={{ backgroundColor: "#B2B2B2" }}>
            <div
                className="container pt-5 pb-5"

            >
                <div className="text-center">
                    <h3 className="text-center text-dark">Contact Us</h3>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    value={contactState.name}
                                    onChange={validateName}
                                    className={`form-control w-50 mt-3 ${contactErrorState.nameError.length > 0 ? "is-invalid" : ""
                                        }`}
                                    placeholder="name"
                                    style={{ margin: "auto" }}
                                />

                                {contactErrorState.nameError.length > 0 ? (
                                    <small
                                        className=""
                                        style={{ color: "red", fontSize: "15px" }}
                                    >
                                        {contactErrorState.nameError}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    value={contactState.email}
                                    onChange={validateEmail}
                                    className={`form-control mt-3 w-50 ${contactErrorState.emailError.length > 0
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    placeholder="email"
                                    style={{ margin: "auto" }}

                                />

                                {contactErrorState.emailError.length > 0 ? (
                                    <small
                                        className=""
                                        style={{ color: "red", fontSize: "15px" }}
                                    >
                                        {contactErrorState.emailError}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={contactState.appName}
                                    onChange={validateAppName}
                                    className={`form-control w-50 mt-3 ${contactErrorState.appNameError.length > 0
                                        ? "is-invalid"
                                        : ""
                                        }`}
                                    placeholder="app name"
                                    style={{ margin: "auto" }}

                                />

                                {contactErrorState.appNameError.length > 0 ? (
                                    <small
                                        className=""
                                        style={{ color: "red", fontSize: "15px" }}
                                    >
                                        {contactErrorState.appNameError}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    value={contactState.info}
                                    onChange={validateInfo}
                                    className={`form-control w-50 mt-3 ${contactErrorState.infoError.length > 0 ? "is-invalid" : ""
                                        }`}
                                    placeholder="Info name"
                                    style={{ margin: "auto" }}

                                />

                                {contactErrorState.infoError.length > 0 ? (
                                    <small
                                        className=""
                                        style={{ color: "red", fontSize: "15px" }}
                                    >
                                        {contactErrorState.infoError}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary form-control mt-3 w-25 "
                                onClick={handleSubmit}


                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
