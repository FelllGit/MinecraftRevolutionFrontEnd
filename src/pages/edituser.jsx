import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import EditUserName from "./../components/editUserName";
import EditUserEmail from "./../components/editUserEmail";
import EditUserPassword from "./../components/editUserPassword";

const EditUser = ({ user, setUserState }) => {

    const location = useLocation();

    React.useEffect(() => {
        console.log(location.pathname);
        if(user){
            if(!user.is_banned){
                    if (
                        document.getElementById("container") &&
                        document.getElementById("container").classList.contains("d-flex")
                    ) {
                        document.getElementById("container").classList.remove("d-flex");
                    }
            }
        }
    }, [location.pathname]);

    return (
        <div className="row justify-content-center align-self-center justify-content-center">
            {user ? (
                user.is_banned ? (
                    <h2 className="col-md-12 text-center ">
                        {document
                            .getElementById("container")
                            .classList.add("d-flex")}
                        <h1 className="text-danger">
                            Ви були заблоковані на проєкті!
                        </h1>
                        <h4>{user.ban_reason}</h4>
                    </h2>
                ) : (
                    <>
                        <EditUserName setUserState={setUserState} />
                        <EditUserEmail />
                        <EditUserPassword />
                    </>
                )
            ) : null}
        </div>
    );
};

export default EditUser;
