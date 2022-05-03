import Axios from "axios";
import React, { useEffect, useState } from "react";

const GetApps = (props) => {
    const [apps, setApps] = useState([]);

    const getApps = async () => {
        try {
            const data = await Axios.get("http://localhost:8000/api/apps");
            console.log("data", data);
            await setApps(data.data)
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getApps()
    }, []);

    return <div>

    </div>;
};

export default GetApps;
