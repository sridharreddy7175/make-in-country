import Axios from "axios";
import React, { useEffect, useState } from "react";


const Apps = () => {

    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const data = await Axios.get("http://localhost:8000/api/categories");
            console.log("data", data.data)
            setCategories(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCategories();
    }, []);

    const renderingCard = () => {

    }
    return (
        <div>
            <h1 className="mt-5 text-center">Welcome to the Apps</h1>
            <div className="container">
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
                            >
                                <option value="">Country</option>
                                <option value="China">China</option>
                                <option value="USA">USA</option>
                                <option value="India">India</option>
                                <option value="S. Korea">S. Korea</option>
                                <option value="Singapore">Singapore</option>
                            </select>
                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                            >
                                <option value="">Category</option>
                                <option value="Social">Social</option>
                                <option value="Payment">Payment</option>
                                <option value="Game">Game</option>
                            </select>
                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                            >
                                <option value="">Downloads</option>
                                <option value="1B">1B+</option>
                                <option value="500M">500M</option>
                                <option value="100M">100M</option>
                                <option value="10M">10M</option>
                            </select>
                            <select
                                className="border border-primary rounded-pill p-1 mr-2"
                                style={{ outline: "none" }}
                            >
                                <option value="">Ratings</option>
                                <option value="5">5</option>
                                <option value="4.9">4.9</option>
                                <option value="4.8">4.8</option>
                                <option value="4.6">4.6</option>
                                <option value="4.5">4.5</option>
                                <option value="4.4">4.4</option>
                                <option value="4.3">4.3</option>
                                <option value="4.2">4.2</option>
                                <option value="4.1">4.1</option>
                                <option value="4.0">4.0</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apps;
