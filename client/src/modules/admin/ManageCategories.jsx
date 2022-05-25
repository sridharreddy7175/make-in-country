import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Base from "./core/Base";
import Axios from "axios";

const ManageCategories = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        // try {
        //     const data = await Axios.get("/api/categories");
        //     console.log("data", data.data)
        //     setCategories(data.data);
        // } catch (err) {
        //     console.log(err);
        // }
        Axios.get("/api/categories")
            .then((res) => {
                setCategories(res.data);


            })
            .catch((err) => {
                console.log("err", err.response.data.errors[0].msg);
            });
    };
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <div>
            <Base title="Welcome admin" description="Manage apps here">
                <h2 className="mb-4">All apps:</h2>
                <Link className="btn btn-info" to={`/admin/dashboard`}>
                    <span className="">Admin Home</span>
                </Link>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center text-white my-3">Total {categories.length} apps</h2>
                        {categories.map((category, index) => {
                            console.log("category", category._id)
                            return (
                                <div className="row text-center mb-2 ">
                                    <div className="col-md-4">
                                        <h3 className="text-white text-left"> {category.name}</h3>
                                    </div>
                                    <div className="col-md-4">
                                        <Link
                                            className="btn btn-success"
                                            to={`/admin/category/update/${category._id}`}
                                        >
                                            <span className="">Update</span>
                                        </Link>
                                    </div>
                                    <div className="col-md-4">
                                        <button onClick={() => { }} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </Base>
        </div>
    );
};

export default ManageCategories;
