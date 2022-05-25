import React, { useState, useEffect } from "react";
import Base from "./core/Base";
import { Link } from "react-router-dom";
import Axios from "axios";

const ManageApps = () => {
    const [apps, setApps] = useState([]);

    const getApps = async () => {
        try {
            const data = await Axios.get("/api/apps");
            console.log("data", data);
            await setApps(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getApps();
    }, []);

    let submitDelete = async (id) => {
        console.log("ccc", id);
        try {
            const data = await Axios.delete(`/api/app/${id}`);
            console.log("data", data);
            getApps();
        } catch (err) {
            // setError(true);
            console.log(err);
        }
    };
    return (
        <Base title="Welcome admin" description="Manage apps here">
            <h2 className="mb-4">All apps:</h2>
            <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">
                        Total {apps.length} apps
                    </h2>

                    {apps.map((app, index) => {
                        return (
                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-4">
                                    <h3 className="text-white text-left">{app.name}</h3>
                                </div>
                                <div className="col-4">
                                    <Link
                                        className="btn btn-success"
                                        to={`/admin/app/update/${app._id}`}
                                    >
                                        <span className="">Update</span>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <button
                                        onClick={() => {
                                            submitDelete(app._id);
                                        }}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    );
};

export default ManageApps;
