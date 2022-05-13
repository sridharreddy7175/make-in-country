import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

const Services = () => {
    return (
        <div className="container mt-5">
            <div class="border pt-2" style={{ borderRadius: "20px" }}>
                <div class=" d-flex mt-2 flex-column align-content-center">
                    <p class=" h5 ml-md-5 mx-sm-auto my-auto text-md-left text-lg-left text-center text-primary">
                        Services
                    </p>
                </div>
                <div
                    class="card ml-md-5 mx-auto col-md-3 col-10 my-4"
                    style={{ borderRadius: "20px" }}
                >
                    <div class="d-block">
                        <div class=" px-1 mt-2 text-center align-items-center">
                            {/* <i
                                class="rounded-circle fa fa-mobile text-black-50 border px-2 py-1 fa-3x my-auto"
                                style={{ borderRadius: "20px", height: "60px", width: "60px" }}
                            ></i> */}
                            <AiFillSetting style={{ borderRadius: "20px", height: "60px", width: "60px" }} />
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
                        <div class="py-1 px-0">
                            <div
                                class="d-flex justify-content-around"
                                style={{ fontWeight: "400", fontSize: "15px" }}
                            >
                                <span class="text-info">Coming Soon</span>
                            </div>
                            <div class="card-body w-100 p-1 d-flex mx-auto justify-content-around">
                                <p class="btn disabled my-auto px-1 py-0 btn-sm text-muted shadow-none border rounded-pill mr-1">
                                    <span>Country</span>
                                </p>
                                <p class=" btn disabled btn-sm py-0 px-1 shadow-none text-muted border rounded-pill my-auto  ">
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

export default Services;
