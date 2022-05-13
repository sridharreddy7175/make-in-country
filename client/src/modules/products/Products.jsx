import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";

const Products = () => {
    return (
        <div className="container mt-5">
            <div class="border pt-2" style={{ borderRadius: "20px" }}>
                <div className=" d-flex mt-2 flex-column align-content-center">
                    <p className=" h5 ml-md-5 mx-sm-auto my-auto text-md-left text-lg-left text-center text-primary">
                        Products
                    </p>
                </div>
                <div
                    className="card ml-md-5 mx-auto col-md-3 col-10 my-4"
                    style={{ borderRadius: "20px" }}
                >
                    <div className="d-block">
                        <div className=" px-1 mt-2 text-center align-items-center">

                            <FaMobileAlt style={{ borderRadius: "20px", height: "60px", width: "60px" }} />
                            <span
                                class="bg-light position-absolute mt-1 font-weight-light text-overlay badge-pill badge-info px-1 py-0"
                                style={{
                                    fontSize: "12px",
                                    top: "0px",
                                    left: "5px",
                                }}
                            >
                                <BsArrowDownShort
                                    style={{
                                        fontSize: "25px",
                                        color: "#6c757d",
                                    }}
                                />
                            </span>
                            <span
                                class="bg-light position-absolute mt-1 font-weight-light text-overlay badge-pill badge-info px-1 py-0"
                                style={{
                                    fontSize: "12px",
                                    top: "0px",
                                    right: "5px",
                                }}
                            >
                                <AiFillStar
                                    style={{
                                        fontSize: "25px",
                                        color: "#6c757d",
                                    }}
                                />
                            </span>
                        </div>
                        <div className="py-1 px-0">
                            <div
                                className="d-flex justify-content-around"
                                style={{ fontWeight: "400", fontSize: "15px" }}
                            >
                                <span className="text-info">Coming Soon</span>
                            </div>
                            <div className="card-body w-100 p-1 d-flex mx-auto justify-content-around">
                                <p className="btn disabled my-auto px-1 py-0 btn-sm text-muted shadow-none border rounded-pill mr-1">
                                    <span>Country</span>
                                </p>
                                <p className=" btn disabled btn-sm py-0 px-1 shadow-none text-muted border rounded-pill my-auto  ">
                                    <span>Category</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
