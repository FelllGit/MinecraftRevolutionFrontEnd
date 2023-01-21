import React, { useEffect } from "react";
import { useRef, useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import LoginForm from "./loginForm";

let timeout;
let scroll = 0;

const Header = ({ user, setUser, picture }) => {
    const [transparency, setTransparency] = React.useState(true);
    const location = useLocation();

    const [height, setHeight] = useState();

    useEffect(() => {
        if (picture.current) {
            console.log(location.pathname);
            setHeight(picture.current.clientHeight);
        }
    }, [location]);

    React.useEffect(() => {
        if (location.pathname === "/") {
            setTransparency(true);
            document
                .getElementById("header")
                .classList.add("transparentHeader");
            document.getElementById("root").classList.remove("pageMargin");
        } else {
            setTransparency(false);
            document
                .getElementById("header")
                .classList.remove("transparentHeader");
            document.getElementById("root").classList.add("pageMargin");
        }
    }, [location.pathname]);

    window.onscroll = () => {
        if (location.pathname === "/") {
            if (
                picture.current &&
                document.documentElement.scrollTop > height - 68
            ) {
                console.log(height);
                document
                    .getElementById("header")
                    .classList.remove("transparentHeader");
            } else {
                console.log(height);
                document
                    .getElementById("header")
                    .classList.add("transparentHeader");
            }
        }
    };

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-ligh`}
            id="header">
            <Link to={"/"}>
                <a className="navbar-brand">MinecraftRevolution</a>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex justify-content-end w-100">
                    <li className="nav-item">
                        <Link to={"/"}>
                            <a className="nav-link">Головна</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/posts/`}>
                            <a className="nav-link">Новини</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Сервери
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown">
                            <Link to={`/servers/hightech`}>
                                <a className="dropdown-item">HighTech</a>
                            </Link>
                            <Link to={`/servers/magic`}>
                                <a className="dropdown-item">Magic</a>
                            </Link>
                            <Link to={`/servers/rpg`}>
                                <a className="dropdown-item">RPG</a>
                            </Link>
                            <Link to={`/servers/dayz`}>
                                <a className="dropdown-item">
                                    DayZ
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            {user ? user.name : "Профіль"}
                        </a>
                        <LoginForm user={user} setUser={setUser} />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
