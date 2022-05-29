import Axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function ChangePassword(props) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");
    let history = useHistory();

    toast.configure();


    const updatePassword = (e) => {
        e.preventDefault()
        var body = {
            email: props?.details?.user?.user?.email,
            currentPassword: currentPassword,
            newPassword: newPassword
        }
        console.log("body", body)

        Axios.post("http://localhost:8000/api/changepasword", body)
            .then((res) => {
                console.log("res", res)
                console.log("res", res.data.msg);

                toast(res.data.msg);
                history.push("/user/dashboard");
            })
            .catch((err) => {
                toast.error(err.response.data.errors[0].msg);

                console.log("err1", err.response.data.errors[0].msg)

                console.log("err", err.response.data[0])
            })
    }

    return (
        <div>
            <div className="container mt-5 mb-5">
                <h2 className="text-center">Change password</h2>
                <div className=" ud mt-5 ">
                    <div className="card1 pt-5 pb-5 mt-1">
                        <input
                            type="password"
                            placeholder="Enter Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className="mt-4"
                            placeholder="Enter New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className="mt-4 mb-4"
                            placeholder="Enter Conform Password"
                            value={conformPassword}
                            onChange={(e) => setConformPassword(e.target.value)}
                        />
                        <br />
                        <button type="button" className="btn btn-success"
                            onClick={updatePassword}
                        >
                            UPDATE PASSWORD
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(
    (state) => ({
        details: state.user,
    }),

    {}
)(ChangePassword);
