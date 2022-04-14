import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const About = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h2
                    className="text-center p-3 rounded-pill"
                    style={{ backgroundColor: "whitesmoke" }}
                >
                    <b>Our Missions</b>
                </h2>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div
                            className="pt-5 pb-5 mt-2 text-center rounded"
                            style={{
                                backgroundColor: "rgba(33,150,243,.3)",
                            }}
                        >
                            <h4
                                className="m-auto border-white border rounded-pill  "
                                style={{ width: "200px" }}
                            >
                                Awareness
                            </h4>
                            <p className="text-center mt-3 ">
                                <b>
                                    {" "}
                                    Provide information about manufacturing country, current
                                    owners, features of apps, services and products.
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="pt-5 pb-5 mt-2 text-center rounded"
                            style={{
                                backgroundColor: "rgba(33,150,243,.3)",
                            }}
                        >
                            <h4
                                className="m-auto border-white border rounded-pill  "
                                style={{ width: "200px" }}
                            >
                                Promote
                            </h4>
                            <p className="text-center mt-3  ">
                                <b>
                                    {" "}
                                    Promote MakeInCountry initiative.Provide better and safe
                                    options for apps, products and services.
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="pt-5 pb-5 mt-2 text-center rounded"
                            style={{
                                backgroundColor: "rgba(33,150,243,.3)",
                            }}
                        >
                            <h4
                                className="m-auto border-white border rounded-pill  "
                                style={{ width: "200px" }}
                            >
                                Motivate
                            </h4>
                            <p className="text-center mt-3  ">
                                <b>
                                    {" "}
                                    Motivate peoples to create and use their apps, products and
                                    services.Putting step forward to development.
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div
                        className="col-md-8 m-auto rounded"
                        style={{
                            backgroundColor: "rgba(33,150,243,.3)",
                            height: "600px",
                        }}
                    >
                        <div className="d-flex justify-content-around mr-2">
                            <div className="mt-5 mb-5 text-center ">
                                <img
                                    src="deva.jpg"
                                    className="rounded"
                                    AiOutlineInstagram
                                    width="300px"
                                    height="100%"
                                    alt="hello"
                                />
                                <div>
                                    <p className="">Follow Me</p>
                                    <a href="https://www.instagram.com/rohitreddydevareddy/" className="mr-2" target="_blank">
                                        <AiOutlineInstagram fontSize="26px" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sridhar-reddy-b2a1591b0/" className="mr-2"
                                        target="_blank">
                                        <AiFillLinkedin fontSize="26px" />
                                    </a>
                                    <Link to="/" className="mr-2" target="_blank">
                                        <AiFillGooglePlusCircle fontSize="26px" />
                                    </Link>
                                    <Link to="/" className="mr-2" target="_blank">
                                        <BsWhatsapp fontSize="26px" />
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-5 mb-5 ml-5">
                                <h4>Becoming Self Aware and Self Reliant</h4>
                                <h6 className="mt-3">
                                    Lets be <b>self reliant</b>. Lets support our country. lets
                                    put stop to foreign dominance. Promote,motivate,support and
                                    use your products, your services that will help you not
                                    others.
                                </h6>
                                <h6 className="mt-5">
                                    <b>DEva Reddy</b>
                                </h6>
                                <span className="mt-2">
                                    Owner and developer of MakeInCountry
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
