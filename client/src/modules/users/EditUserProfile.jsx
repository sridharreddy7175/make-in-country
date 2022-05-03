import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import p1 from "./profile.jpg";
import { FaEdit } from "react-icons/fa";

const EditUserProfile = (props) => {
    return (
        <div>
            <div>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4 ud mt-5 ">
                            <div className="card pt-2 pb-2 mt-1">
                                <img src={p1} alt="hello" />

                                <h4 className="text-center">
                                    <b>{props?.details?.user?.name}</b>
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-8  ud1 mt-5">
                            <div className="card pt-2 pb-2 pl-3 pr-3">
                                <div className="row mt-3">
                                    <div className="col-sm-3 pt-2">
                                        <p class="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9 pt-2">
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-sm-3">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-sm-3">
                                        <p class="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" />
                                    </div>
                                </div>


                                <div className="row mt-3">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 ">
                                        <button
                                            type="button"
                                            className="btn btn-success "
                                        >
                                            UPDATE PROFILE
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        details: state.user.user,
    }),

    {}
)(EditUserProfile);
