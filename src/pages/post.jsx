import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import getPost from "./../getInfo/getPostInfo";

const Post = ({ }) => {
    
    useEffect(() => {
        if (
            document.getElementById("container") &&
            document.getElementById("container").classList.contains("d-flex")
        ) {
            document.getElementById("container").classList.remove("d-flex");
        }
    }, []);

    const [post, setPost] = useState(null);
    const { id } = useParams();

    var options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    useEffect(() => {
        getPost([setPost], id);
    }, [id]);

    return post ? (
        <div className="postPage">
            <div className="postHeader">
                <h1>{post.name}</h1>
                <small>
                    {post.created_at === post.updated_at
                        ? "Створено: " +
                          new Date(post.created_at).toLocaleString(
                              "ua-UK",
                              options
                          )
                        : "Створено: " +
                          new Date(post.created_at).toLocaleString(
                              "ua-UK",
                              options
                          ) +
                          " | Оновлено: " +
                          new Date(post.updated_at).toLocaleString(
                              "ua-UK",
                              options
                          )}
                </small>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default Post;
