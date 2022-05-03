import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Base from "./core/Base";


const AdminDashboard = (props) => {
    console.log("props", props.details.user.name)
    const adminLeftSide = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/app" className="nav-link text-success">
                            Create Apps
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/apps" className="nav-link text-success">
                            Manage Apps
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-success">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-success">
                            Manage Categories
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:{props?.details?.user?.name}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:{props?.details?.user?.email}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-danger">Admin Area</span>
                    </li>
                </ul>
            </div>
        );
    };
    return (
        <Base
            title="Welcome to admin area"
            description="Manage all of your apps here"
            className="container bg-success p-4"
        >
            <div className="">
                <div className="row">
                    <div className="col-md-3">{adminLeftSide()}</div>
                    <div className="col-md-9">{adminRightSide()}</div>
                </div>
            </div>
        </Base>
    );
};

export default connect(
    (state) => ({
        details: state.user.user,
    }),

    {}
)(AdminDashboard);
