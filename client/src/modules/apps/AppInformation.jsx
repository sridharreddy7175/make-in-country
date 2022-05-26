import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import OtherApps from "./OtherApps";
import Footer from "../layout/Footer";

const AppInformation = () => {
    const { id } = useParams();
    const [size, setSize] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [downloads, setDownloads] = useState("");
    const [ratings, setRatings] = useState("");
    const [ratingCount, setRatingCount] = useState("");
    const [country, setCountry] = useState("");
    const [category, setCategory] = useState("");
    const [founder, setFounder] = useState("");
    const [currentOwner, setCurrentOwner] = useState("");
    const [company, setCompany] = useState("");
    const [firstRelase, setFirstRelase] = useState("");
    const [headQuarter, setHeadQuarter] = useState("");
    const [details, setDetails] = useState("");
    const [issues, setIssues] = useState("");
    const [features, setFeatures] = useState("");
    const [catName, setCatName] = useState("");

    const getApp = async () => {
        try {
            var resProducts = await fetch(`/api/app/${id}`);
            var response = await resProducts.json();
            console.log("response", response);
            setName(response?.name);
            setSize(response?.size);
            setPhoto(response?.photo);
            setCategory(response?.category?.name);
            setDownloads(response?.downloads);
            setRatings(response?.ratings);
            setRatingCount(response?.ratingCount);
            setCountry(response?.country);
            setFounder(response?.founder);
            setCurrentOwner(response?.currentOwner);
            setCompany(response?.company);
            setFirstRelase(response?.firstRelase);
            setHeadQuarter(response?.headQuarter);
            setDetails(response?.details);
            setIssues(response?.issues);
            setFeatures(response?.features);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getApp();
    }, []);

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-app p-2">
                            <div className="card-header d-flex  justify-content-around px-0 py-2 rounded-pill border">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h6 className="mt-3">{name}</h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <img
                                            alt=""
                                            className=""
                                            height="60"
                                            width="60"
                                            src={`/api/app/photo/${id}`}
                                            style={{ borderRadius: "20px" }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <p className="mt-3">
                                        <BsArrowDownShort
                                            style={{
                                                fontSize: "25px",
                                                color: "#6c757d",
                                            }}
                                        />
                                        {downloads}
                                    </p>
                                </div>
                                <div className="col-sm-4">
                                    <p className="mt-3">
                                        <AiFillStar
                                            style={{
                                                fontSize: "25px",
                                                color: "#6c757d",
                                            }}
                                        />
                                        {ratings}
                                    </p>
                                </div>
                                <div className="col-sm-4">
                                    <p className="mt-3">
                                        <BsFillHandbagFill
                                            style={{
                                                fontSize: "25px",
                                                color: "#6c757d",
                                            }}
                                        />
                                        {ratingCount}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <h6 className="text-center">
                                <b>{category}</b>
                            </h6>
                            <hr />
                            <div className="text-center">
                                <button type="button" className="btn btn-primary text-center">
                                    {country}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card-app p-2">
                            <div className="card-header d-flex  justify-content-around px-0 py-2 rounded-pill border">
                                <h5>About</h5>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <p className="pt-1">Founder</p>
                                </div>

                                <div className="col-sm-8">
                                    <p className="pt-1">{founder}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <p className="pt-1">Owner</p>
                                </div>

                                <div className="col-sm-8">
                                    <p className="pt-1">{currentOwner}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <p className="pt-1">Organisation</p>
                                </div>

                                <div className="col-sm-8">
                                    <p className="pt-1">{company}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <p className="pt-1">First Release</p>
                                </div>

                                <div className="col-sm-8">
                                    <p className="pt-1">{firstRelase}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                    <p className="pt-1">Head Quarter</p>
                                </div>

                                <div className="col-sm-8">
                                    <p className="pt-1">{headQuarter}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-app p-2">
                            <div className="card-header d-flex  justify-content-around px-0 py-2 rounded-pill border">
                                <h5>Details</h5>
                            </div>

                            <h6>{details}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <OtherApps />
            <Footer />
        </div>
    );
};

export default AppInformation;
