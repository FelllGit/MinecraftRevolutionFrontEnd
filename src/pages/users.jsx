import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Users = ({ user }) => {
    const loggedUser = user;
    useEffect(() => {
        if (
            document.getElementById("container") &&
            document.getElementById("container").classList.contains("d-flex")
        ) {
            document.getElementById("container").classList.remove("d-flex");
        }
    }, []);

    const [users, setUsers] = useState([]);
    var options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:80/api/users");
            const data = await res.json();
            setUsers(data);
        }

        fetchData();
    }, []);

    console.log(users);

    return (
        <div className="row" id="users">
            {users.map(user => (
                <div key={user.id} className="user col-md-6 text-start">
                    <h2>{user.name}</h2>
                    <div id="manageButtons">
                        <Link to={`/user/${user.id}`}>
                            <button type="button" className="btn btn-primary">
                                Подивитись повністю
                            </button>
                        </Link>
                        {loggedUser ? (
                            loggedUser.is_admin ? (
                                <>
                                    <Link to={`/posts/edit/${user.id}`}>
                                        <button
                                            type="button"
                                            className="btn btn-warning">
                                            Редагувати
                                        </button>
                                    </Link>
                                    {!user.is_banned ? (
                                        <>
                                            <button
                                                type="button"
                                                className="btn btn-danger">
                                                Забанити
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                type="button"
                                                className="btn btn-danger">
                                                Розбанити
                                            </button>
                                        </>
                                    )}
                                </>
                            ) : null
                        ) : null}
                    </div>
                    <small className="date">
                        {new Date(user.created_at).toLocaleString(
                            "ua-UK",
                            options
                        )}
                    </small>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Users;
