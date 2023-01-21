import React, {  useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Main = ({  }) => {
    const location = useLocation();
    useEffect(() => {
        if (
            document.getElementById("container") &&
            document.getElementById("container").classList.contains("d-flex")
        ) {
            document.getElementById("container").classList.remove("d-flex");
        }
    }, []);
    return (
        <div className="row w-100 h-100">
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
            <h1>Main</h1>
        </div>
    );
};

export default Main;
