import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Posts = ({ user }) => {
    useEffect(() => {
        if (
            document.getElementById("container") &&
            document.getElementById("container").classList.contains("d-flex")
        ) {
            document.getElementById("container").classList.remove("d-flex");
        }
    }, []);

    const [posts, setPosts] = useState([]);
    var options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:80/api/posts");
            const data = await res.json();
            setPosts(data);
        }

        fetchData();
    }, []);

    const reversedPosts = [...posts].reverse();

    return (
        <div className="row" id="posts">
            {reversedPosts.map(post => (
                <div key={post.id} className="post col-md-6 text-start">
                    <h2>{post.name}</h2>
                    <p className="description">{post.description}</p>
                    <div id="manageButtons">
                        <Link to={`/posts/${post.id}`}>
                            <button type="button" className="btn btn-primary">
                                Подивитись повністю
                            </button>
                        </Link>
                        {user ? (
                            user.is_admin ? (
                                <>
                                    <Link to={`/posts/edit/${post.id}`}>
                                        <button
                                            type="button"
                                            className="btn btn-warning">
                                            Редагувати
                                        </button>
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn btn-danger">
                                        Видалити
                                    </button>
                                </>
                            ) : (
                                null
                            )
                        ) : null}
                    </div>
                    <small className="date">
                        {new Date(post.created_at).toLocaleString(
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

export default Posts;
