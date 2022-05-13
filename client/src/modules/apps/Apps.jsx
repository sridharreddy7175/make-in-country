import Axios from "axios";
import e from "express";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Apps = () => {
    const [apps, setApps] = useState([]);
    let [filteredData, setFiletredData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("")
    const [country, setCountry] = useState("")
    const [downloads, setDownloads] = useState("")
    const [ratings, setRatings] = useState("")

    const getCategories = async () => {
        try {
            const data = await Axios.get("http://localhost:8000/api/categories");
            // console.log("data", data.data);
            // catData = data.data;
            setCategories(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCategories();
    }, []);
    // console.log("hdhdhhd", filteredData)
    const getApps = async () => {
        try {
            const data = await Axios.get("http://localhost:8000/api/apps");
            // console.log("data", data.data);
            setApps(data.data);
            setFiletredData(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getApps();
    }, []);

    const filteredCountry = apps.filter(
        (li, idx, self) =>
            self.map((itm) => itm.country).indexOf(li.country) === idx
    );

    const filteredDownloads = apps.filter(
        (li, idx, self) =>
            self.map((itm) => itm.downloads).indexOf(li.downloads) === idx
    );

    const filteredRatings = apps.filter(
        (li, idx, self) =>
            self.map((itm) => itm.ratings).indexOf(li.ratings) === idx
    );

    const filteredItem = async (category, type) => {
        console.log("e", category, type)

        // console.log("cat", category, "coun", country, "ratings", ratings, "down", downloads)
        // console.log("target", e.target.value, "data", type)
        // // let checkValue = data.country  // default to country
        // const result = apps.filter((a) => {
        //     // console.log("a", a);

        //     console.log("category", a.category.name)
        //     return (e === a.category.name)
        // });
        //console.log("result", result)
        // setFiletredData(result);
        // // return result




    };
    useEffect(() => {
        console.log("cat", category, "coun", country, "ratings", ratings, "down", downloads)
        // filteredItem(category, "category")
    }, [category])

    // useEffect(() => {
    //     console.log("cat", category, "coun", country, "ratings", ratings, "down", downloads)

    // }, [country])
    // useEffect(() => {
    //     console.log("cat", category, "coun", country, "ratings", ratings, "down", downloads)

    // }, [ratings])
    // useEffect(() => {
    //     console.log("cat", category, "coun", country, "ratings", ratings, "down", downloads)

    // }, [downloads])

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
                                    await setCategory(e.target.value)
                                    // filteredItem(e, "category")
                                }}
                            >
                                <option value="">Category</option>
                                {apps &&
                                    apps.map((cate, index) => (
                                        <option key={index} value={cate.name}>
                                            {cate?.name}
                                        </option>
                                    ))}
                            </select>
                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                                onClick={async (e) => {
                                    await setCountry(e.target.value)
                                    // filteredItem(e, "country")
                                }}
                            >
                                <option value="">Country</option>

                                {apps &&
                                    filteredCountry.map((cate, index) => {
                                        return (
                                            <option key={index} value={cate.country}>
                                                {cate.country}
                                            </option>
                                        );
                                    })}
                            </select>

                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                                onClick={async (e) => {
                                    await setDownloads(e.target.value)
                                    // filteredItem(e, "downloads")
                                }}

                            >
                                <option value="">Downloads</option>
                                {apps &&
                                    filteredDownloads.map((cate, index) => (
                                        <option key={index} value={cate.downloads}>
                                            {cate.downloads}
                                        </option>
                                    ))}
                            </select>
                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                                onClick={async (e) => {
                                    await setRatings(e.target.value)
                                    // filteredItem(e, "ratings")
                                }}

                            >
                                <option value="">Ratings</option>
                                {apps &&
                                    filteredRatings.map((cate, index) => (
                                        <option key={index} value={cate.ratings}>
                                            {cate.ratings}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="container-fluid">
                            <div className="row p-0 mx-md-4 mb-md-4 mt-3">
                                {filteredData?.length > 0 ? (
                                    filteredData?.map((a) => {
                                        let categoryName = a.category.name;
                                        let country = a.country;

                                        return (

                                            < div className="col-6 px-0 mx-0 col-md-auto" key={a._id} >

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
                                                                    src={`http://localhost:8000/api/app/photo/${a._id}`}
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
        </div >
    );
};

export default Apps;
