import Axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UpdateApps = (props) => {
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
    const [categories, setCategories] = useState([]);
    const { id } = useParams();
    const getCategories = async () => {
        // try {
        //     const data = await Axios.get("/api/categories");
        //     console.log("data", data.data);
        //     setCategories(data.data);
        // } catch (err) {
        //     console.log(err);
        // }
        Axios.get("/api/categories")
            .then((res) => {
                setCategories(res.data)

            })
            .catch((err) => {
                console.log("err", err.response.data.errors[0].msg);
            });
    };
    useEffect(() => {
        getCategories();
    }, []);



    const getApp = async () => {
        // try {
        //     var resProducts = await fetch(`/api/app/${id}`);
        //     var response = await resProducts.json();
        //     console.log("res", response);
        //     setName(response.name);
        //     setSize(response.size);
        //     setPhoto(response.photo);
        //     setCategory(response.category);
        //     setDownloads(response.downloads);
        //     setRatings(response.ratings);
        //     setRatingCount(response.ratingCount);
        //     setCountry(response.country);
        //     setFounder(response.founder);
        //     setCurrentOwner(response.currentOwner);
        //     setCompany(response.company);
        //     setFirstRelase(response.firstRelase);
        //     setHeadQuarter(response.headQuarter);
        //     setDetails(response.details);
        //     setIssues(response.issues);
        //     setFeatures(response.features);

        // } catch (err) {
        //     console.log(err);
        // }
        Axios.get(`/api/app/${id}`)
            .then((res) => {
                setName(res.data.name);
                setSize(res.data.size);
                setPhoto(res.data.photo);
                setCategory(res.data.category);
                setDownloads(res.data.downloads);
                setRatings(res.data.ratings);
                setRatingCount(res.data.ratingCount);
                setCountry(res.data.country);
                setFounder(res.data.founder);
                setCurrentOwner(res.data.currentOwner);
                setCompany(res.data.company);
                setFirstRelase(res.data.firstRelase);
                setHeadQuarter(res.data.headQuarter);
                setDetails(res.data.details);
                setIssues(res.data.issues);
                setFeatures(res.data.features);

            })
            .catch((err) => {
                console.log("err", err.response.data.errors[0].msg);
            });
    };
    useEffect(() => {
        getApp();
    }, []);
    const handlePhoto = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setPhoto(file);
        };

        reader.readAsDataURL(file);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // setSuccess(false);
        const formData = new FormData();
        formData.append("size", size);
        formData.append("photo", photo);
        formData.append("name", name);
        formData.append("downloads", downloads);
        formData.append("ratings", ratings);
        formData.append("ratingCount", ratingCount);
        formData.append("country", country);
        formData.append("category", category);
        formData.append("founder", founder);
        formData.append("currentOwner", currentOwner);
        formData.append("company", company);
        formData.append("firstRelase", firstRelase);
        formData.append("headQuarter", headQuarter);
        formData.append("details", details);
        formData.append("issues", issues);
        formData.append("features", features);

        // try {
        //     const data = await Axios.put(
        //         `http://localhost:8000/api/app/${id}`,
        //         formData
        //     );
        //     console.log("data", data);
        //     setName("");
        //     setSize("");
        //     setPhoto("");
        //     setCategory("");
        //     setDownloads("");
        //     setRatings("");
        //     setRatingCount("");
        //     setCountry("");
        //     setFounder("");
        //     setCurrentOwner("");
        //     setCompany("");
        //     setCategory("");
        //     setFirstRelase("");
        //     setHeadQuarter("");
        //     setDetails("");
        //     setIssues("");
        //     setFeatures("");
        // } catch (err) {
        //     console.log(err);
        // }

        Axios.put(`/api/app/${id}`, formData)
            .then((res) => {
                console.log("res", res.data.msg);

            })
            .catch((err) => {
                console.log("err", err.response.data.errors[0].msg);
            });
        setName("");
        setSize("");
        setPhoto("");
        setCategory("");
        setDownloads("");
        setRatings("");
        setRatingCount("");
        setCountry("");
        setFounder("");
        setCurrentOwner("");
        setCompany("");
        setCategory("");
        setFirstRelase("");
        setHeadQuarter("");
        setDetails("");
        setIssues("");
        setFeatures("");

    };

    const updateProductForm = () => (
        <form>
            <div className="form-group pt-3">
                <label className="btn btn-block btn-success">
                    <input
                        // onChange={handleChange("photo")}
                        onChange={handlePhoto}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setSize(e.target.value)}
                    name="size"
                    className="form-control"
                    placeholder="Size"
                    value={size}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setDownloads(e.target.value)}
                    name="downloads"
                    className="form-control"
                    placeholder="Downloads"
                    value={downloads}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setRatings(e.target.value)}
                    name="ratings"
                    className="form-control"
                    placeholder="Ratings"
                    value={ratings}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setRatingCount(e.target.value)}
                    name="ratingCount"
                    className="form-control"
                    placeholder="ratingCount"
                    value={ratingCount}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setCountry(e.target.value)}
                    name="country"
                    className="form-control"
                    placeholder="Country"
                    value={country}
                />
            </div>

            <div className="form-group">
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control"
                    placeholder="Category"
                >
                    <option>Select</option>
                    {categories &&
                        categories.map((cate, index) => (
                            <option key={index} value={cate._id}>
                                {cate.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setFounder(e.target.value)}
                    name="founder"
                    className="form-control"
                    placeholder="founder"
                    value={founder}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setCurrentOwner(e.target.value)}
                    name="currentOwner"
                    className="form-control"
                    placeholder="currentOwner"
                    value={currentOwner}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setCompany(e.target.value)}
                    name="company"
                    className="form-control"
                    placeholder="Company"
                    value={company}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setFirstRelase(e.target.value)}
                    name="firstRelase"
                    className="form-control"
                    placeholder="firstRelase"
                    value={firstRelase}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setHeadQuarter(e.target.value)}
                    name="headQuarter"
                    className="form-control"
                    placeholder="headQuarter"
                    value={headQuarter}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setDetails(e.target.value)}
                    name="details"
                    className="form-control"
                    placeholder="Details"
                    value={details}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setIssues(e.target.value)}
                    name="issues"
                    className="form-control"
                    placeholder="Issues"
                    value={issues}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setFeatures(e.target.value)}
                    name="features"
                    className="form-control"
                    placeholder="features"
                    value={features}
                />
            </div>

            <button
                type="submit"
                onClick={onSubmit}
                className="btn btn-outline-success mb-3"
            >
                Update App
            </button>
        </form>
    );

    return (
        <div className="pb-5">
            <h3 className="text-center pt-1">Add a App here!</h3>
            <p className="text-center pb-1">Welcome to App creation section</p>
            <div className="container bg-info p-4">
                <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
                    Admin Home
                </Link>
                <div className="row bg-dark text-white rounded">
                    <div className="col-md-8 offset-md-2">
                        {/* {successMessage()} */}
                        {updateProductForm()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        details: state.user,
    }),

    {}
)(UpdateApps);
