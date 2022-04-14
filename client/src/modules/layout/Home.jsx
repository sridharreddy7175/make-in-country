import React from "react";

const Home = () => {
    return (
        <div className="mt-5 mb-3">
            <div className="text-center">
                <div className="rounded p-2 d-flex justify-content-center">
                    <h1
                        className="text-white p-2"
                        style={{
                            background:
                                "linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))",
                        }}
                    >
                        Welcome to Make In Country
                    </h1>
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <h2
                        className="mr-3 p-2 rounded text-white"
                        style={{ background: "#4EC3F7", fontFamily: "cursive" }}
                    >
                        Apps
                    </h2>
                    <h3
                        className="mr-3 p-2 rounded text-white"
                        style={{ background: "#4EC3F7", fontFamily: "sans-serif" }}
                    >
                        Products
                    </h3>
                    <h3
                        className="p-2 rounded text-white"
                        style={{ background: "#4EC3F7", fontFamily: "monospace" }}
                    >
                        Services
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
