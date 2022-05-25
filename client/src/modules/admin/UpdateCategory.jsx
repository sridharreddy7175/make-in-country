import Axios from "axios";
import React, { useState, useEffect } from "react";
import Base from "./core/Base";
import { Link, useParams } from "react-router-dom";

const UpdateCategory = () => {
    const [name, setName] = useState("");
    const { id } = useParams();
    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
                Admin Home
            </Link>
        </div>
    );

    const getCategory = async () => {
        try {
            var resProducts = await fetch(`/api/category/${id}`);
            var response = await resProducts.json();
            console.log("res", response)
            setName(response.name);
            // console.log("response123", response);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCategory();
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();

        let body = {
            name: name,
        };
        try {
            const data = await Axios.put(
                `/api/category/${id}/`,
                body,

            );
            console.log("data", data);

        } catch (err) {
            console.log(err);
        }
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
                <button className="btn btn-outline-info" onClick={onSubmit}>
                    Update Category
                </button>
            </div>
        </form>
    );
    return (
        <div>
            <Base
                title="Update a category here"
                description="Update a new category for new apps"
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

export default UpdateCategory;
