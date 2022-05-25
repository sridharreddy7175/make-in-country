import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "./core/Base";

const CreateCategory = () => {
    const [name, setName] = useState("");
    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
                Admin Home
            </Link>
        </div>
    );
    const submit = async (e) => {
        e.preventDefault()
        let body = {
            name: name,
        };
        try {
            const data = await Axios.post(
                "/api/category/create/",
                body
            );
            console.log("data", data);
        } catch (err) {
            console.log(err);
        }
        setName("")
    };
    const myCategoryForm = () => (
        <form>
            <div className="form-group">
                <p className="lead">Enter the category</p>
                <input
                    type="text"
                    className="form-control my-3"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoFocus
                    required
                    placeholder="For Ex. App"
                />
                <button className="btn btn-outline-info" onClick={submit}>
                    Create Category
                </button>
            </div>
        </form>
    );
    return (
        <div>
            <Base
                title="Create a category here"
                description="Add a new category for new apps"
                className="container bg-info p-4"
            >
                <div className="row bg-white rounded">
                    <div className="col-md-8 offset-md-2">
                        {myCategoryForm()}
                        {goBack()}
                    </div>
                </div>
            </Base>
        </div>
    );
};

export default CreateCategory;
