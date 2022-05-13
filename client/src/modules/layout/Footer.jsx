import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <div
            className="mt-3 pt-5 pb-5"
            style={{
                background: "linear-gradient(45deg,#000,#2f4f4f)",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex flex-wrap justify-content-center my-auto">
                            <Link className="ml-2 Link" to="/">
                                Home
                            </Link>
                            <Link className="ml-3 Link" to="/apps">
                                AppList
                            </Link>
                            <Link className="ml-3 Link" to="/about">
                                About
                            </Link>
                            <Link className="ml-3 Link" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-white text-center">Deva && Rohit Reddy</h5>
                        <div className="d-flex flex-wrap justify-content-center my-auto">
                            <a
                                className="ml-2 Link"
                                href="https://www.instagram.com/rohitreddydevareddy/"
                                target="_blank"

                            >
                                {" "}
                                <AiOutlineInstagram fontSize="26px" />
                            </a>
                            <a
                                className="ml-2 Link"
                                href="https://www.linkedin.com/in/sridhar-reddy-b2a1591b0/"
                                target="_blank"
                            >
                                {" "}
                                <AiFillLinkedin fontSize="26px" />
                            </a>
                            <Link className="ml-2 Link">
                                {" "}
                                <AiFillGooglePlusCircle fontSize="26px" />
                            </Link>
                            <Link className="ml-2 Link">
                                {" "}
                                <BsWhatsapp fontSize="26px" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-white text-center">
                            © 2022 Copyright: MakeInCountry.com
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
