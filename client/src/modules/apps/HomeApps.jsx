import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeApps = () => {
    const [apps, setApps] = useState([]);
    const [filterCateory, setFilterCateory] = useState();
    const [filterCountry, setFilterCountry] = useState("");
    const [filterDownloads, setFilterDownloads] = useState("");
    const [filterRating, setFilterRating] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [dupApps, setDupApps] = useState([]);


    const getApps = async () => {
        setLoading(true)
        try {
            const data = await Axios.get("/api/apps");
            setApps(data.data);
            setDupApps(data.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(true)
        }
    };

    useEffect(() => {
        getApps();
    }, []);

    const filteredCountry = dupApps.filter(
        (li, idx, self) =>
            self.map((itm) => itm.country).indexOf(li.country) === idx
    );

    const filteredCategory = dupApps.filter(
        (li, idx, self) =>
            self.map((itm) => itm.category.name).indexOf(li.category.name) === idx
    );

    const filteredDownloads = dupApps.filter(
        (li, idx, self) =>
            self.map((itm) => itm.downloads).indexOf(li.downloads) === idx
    );

    const filteredRatings = dupApps.filter(
        (li, idx, self) =>
            self.map((itm) => itm.ratings).indexOf(li.ratings) === idx
    );

    const filteredItemCategory = async (value, type) => {
        setFilterCateory(value);
    };

    const filteredItemCountry = async (value, type) => {
        setFilterCountry(value);
    };
    const filteredItemDownloads = async (value, type) => {
        setFilterDownloads(value);
    };
    const filteredItemRating = async (value, type) => {
        setFilterRating(value);
    };

    useEffect(() => {
        async function filter() {
            var filtercondition = [
                filterCateory,
                filterCountry,
                filterDownloads,
                filterRating,
            ];
            console.log(filterCateory);
            var filtered = await dupApps.filter((o) => {
                if (filtercondition[0] && o.category.name !== filtercondition[0]) {
                    return false;
                }
                if (filtercondition[1] && o.country !== filtercondition[1]) {
                    return false;
                }
                if (filtercondition[2] && o.downloads !== filtercondition[2]) {
                    return false;
                }
                if (filtercondition[3] && o.ratings !== filtercondition[3]) {
                    return false;
                }
                return true;
            });
            setApps(filtered);
        }
        filter();

    }, [filterCateory, filterCountry, filterDownloads, filterRating]);


    if (error === true) {
        return <h3 className="container mt-5">falied to Loading....</h3>;
    }
    if (loading === true) {
        return <h3 className="container mt-5">Loading......</h3>;
    }


    return (
        <div>
            <div className="container mt-5">
                <div className="p-2 border" style={{ borderRadius: "20px" }}>
                    <div className="row p-0 m-0">
                        <div className="col-md-4 d-flex align-content-center">
                            <p className=" h5 ml-4 my-auto text-md-left text-lg-left text-center text-primary">
                                Apps
                            </p>
                        </div>
                        <div className="col-md-8 text-md-right text-center m-auto">
                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                                onClick={async (e) => {
                                    filteredItemCategory(e.target.value, "category");
                                }}
                            >
                                <option value="">Category</option>
                                {dupApps &&
                                    filteredCategory.map((cate, index) => (
                                        <option key={index} value={cate?.category.name}>
                                            {cate?.category.name}
                                        </option>
                                    ))}
                            </select>
                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                                onClick={async (e) => {
                                    filteredItemCountry(e.target.value, "country");
                                }}
                            >
                                <option value="">Country</option>

                                {dupApps &&
                                    filteredCountry.map((cate, index) => {
                                        return (
                                            <option key={index} value={cate.country}>
                                                {cate.country}
                                            </option>
                                        );
                                    })}
                            </select>

                            <select
                                className="border border-primary rounded-pill p-1 mr-2 mt-2"
                                style={{ outline: "none" }}
                                onClick={async (e) => {
                                    filteredItemDownloads(e.target.value, "downloads");
                                }}
                            >
                                <option value="">Downloads</option>
                                {dupApps &&
                                    filteredDownloads.map((cate, index) => (
                                        <option key={index} value={cate.downloads}>
                                            {cate.downloads}
                                        </option>
                                    ))}
                            </select>
                            <select
                                className="border border-primary rounded-pill p-1 mr-2 mt-2"
                                style={{ outline: "none" }}
                                onClick={async (e) => {
                                    filteredItemRating(e.target.value, "ratings");
                                }}
                            >
                                <option value="">Ratings</option>
                                {dupApps &&
                                    filteredRatings.map((cate, index) => (
                                        <option key={index} value={cate.ratings}>
                                            {cate.ratings}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="container-fluid">
                            <div className="row p-0 mx-md-4 mb-md-4 mt-3">
                                {apps?.length > 0 ? (
                                    apps?.map((a) => {
                                        let categoryName = a.category.name;
                                        let country = a.country;

                                        return (
                                            <div className="col-6 px-0 mx-0 col-md-auto" key={a._id}>
                                                <div
                                                    className="card p-1 my-2 mx-2 mx-md-2  mx-xl-2 mx-lg-2"
                                                    style={{
                                                        borderRadius: "20px",
                                                        width: "150px",
                                                        height: "150px",
                                                    }}
                                                >
                                                    <div className="d-block">
                                                        <div className=" px-1 text-center align-items-center">
                                                            <Link to={`/app/${a._id}`}>
                                                                <img
                                                                    alt=""
                                                                    className="rounded-circle my-auto"
                                                                    height="60"
                                                                    width="60"
                                                                    src={`/api/app/photo/${a._id}`}
                                                                    style={{ borderRadius: "20px" }}
                                                                />
                                                                <span
                                                                    className=" position-absolute mt-1 font-weight-light text-overlay badge-pill badge-info px-1 py-0"
                                                                    style={{
                                                                        fontSize: "12px",
                                                                        top: "0px",
                                                                        left: "5px",
                                                                    }}
                                                                >
                                                                    {a.downloads}
                                                                </span>
                                                                <span
                                                                    className=" position-absolute mt-1 font-weight-light text-overlay badge-pill badge-info px-1 py-0"
                                                                    style={{
                                                                        fontSize: "12px",
                                                                        top: "0px",
                                                                        right: "5px",
                                                                    }}
                                                                >
                                                                    {a.ratings}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="p-1 ">
                                                            <div
                                                                className="d-flex justify-content-around"
                                                                style={{ fontWeight: "400", fontSize: "15px" }}
                                                            >
                                                                <Link to={`/app/${a._id}`}>{a.name}</Link>
                                                            </div>
                                                            <div className="card-body w-100 p-1 d-flex mx-auto justify-content-around">
                                                                <Link to={`/apps/by/${country}`}>
                                                                    <p className="btn my-auto px-1 py-0 btn-sm text-muted shadow-none border rounded-pill mr-1">
                                                                        {a.country}
                                                                    </p>
                                                                </Link>
                                                                <Link to={`/apps/by/${categoryName}`}>
                                                                    <p className=" btn btn-sm py-0 px-1 shadow-none text-muted border rounded-pill my-auto  ">
                                                                        {a.category.name}
                                                                    </p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <h5 className="mt-5 text-center" style={{ margin: "auto" }}>
                                        No Results Found
                                    </h5>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeApps;
