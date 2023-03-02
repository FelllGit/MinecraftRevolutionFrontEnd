import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import EditUserName from "./../components/editUserName";
import EditUserEmail from "./../components/editUserEmail";
import EditUserPassword from "./../components/editUserPassword";

const AdminPage = ({ user }) => {
    const location = useLocation();

    React.useEffect(() => {
        console.log(location.pathname);
        if (user) {
            if (!user.is_admin) {
                if (
                    document.getElementById("container") &&
                    document
                        .getElementById("container")
                        .classList.contains("d-flex")
                ) {
                    document
                        .getElementById("container")
                        .classList.remove("d-flex");
                }
            }
        }
    }, [location.pathname]);

    return (
        <>
            {user ? (
                !user.is_admin ? (
                    <h2 className="col-md-12 text-center ">
                        {document
                            .getElementById("container")
                            .classList.add("d-flex")}
                        <h1 className="text-danger">
                            У вас недостатньо прав для перегляду цієї сторінки!
                        </h1>
                    </h2>
                ) : (
                    <>
                        <Link to={`/users`}>
                            <a>Отримати всіх користувачів</a>
                        </Link>

                        <Link to={`/reports/`}>
                            <a>Отримати всі репорти</a>
                        </Link>
                        <Link to={`/posts/new`}>
                            <a>Написати новий пост</a>
                        </Link>
                    </>
                )
            ) : null}
        </>
    );
};

export default AdminPage;
