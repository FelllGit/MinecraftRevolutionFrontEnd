import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import getUser from "../getInfo/getUserInfo";

const User = ({  }) => {
    useEffect(() => {
        if (
            document.getElementById("container") &&
            document.getElementById("container").classList.contains("d-flex")
        ) {
            document.getElementById("container").classList.remove("d-flex");
        }
    }, []);

    const [user, setUser] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        getUser([setUser], id);
    }, [localStorage.getItem("token")]);

    return <div className="row">{user ? user.name : "404"}</div>;
};

export default User;
