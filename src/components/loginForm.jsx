import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import getUser from "../getInfo/getUserProfile";

async function authenticateUser(email, password) {
    try {
        const response = await axios.post(
            "http://localhost:80/api/authenticate",
            { email, password }
        );
        const token = response.data.token;
        // Зберегти токен в локальному сховищі
        localStorage.setItem("token", token);
    } catch (error) {
        console.error(error);
    }
}

async function logoutUser() {
    localStorage.removeItem("token");
    try {
        const token = localStorage.getItem("token");
        // Відправити запит POST на знехтування токену
        await axios.post("http://localhost:80/api/logout", { token });
    } catch (error) {
        console.error(error);
    }
}

function LoginForm(props) {
    const { user, setUser } = props;

    // Ініціалізувати стани для адреси електронної пошти та паролю
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Обробник для входу
    const handleLogin = async () => {
        // Виклик функції authenticateUser з параметрами email та password
        await authenticateUser(email, password);
        // Очистити поля форми
        setEmail("");
        setPassword("");
        getUser([setUser]);
    };

    // Обробник для виходу
    const handleLogout = async () => {
        // Виклик функції logoutUser
        await logoutUser();
        setUser(null);
    };

    const token = localStorage.getItem("token");
    if (!token) {
        return (
            <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ paddingTop: "1px" }}>
                {/* Форма входу */}
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "5px",
                    }}>
                    <input
                        placeholder="Пошта"
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ marginBottom: "5px" }}
                    />
                    <input
                        placeholder="Пароль"
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{ marginBottom: "5px" }}
                    />
                    <div
                        style={{ textAlign: "center" }}
                        className="d-flex justify-content-between">
                        <button
                            className="dropdown-item"
                            type="button"
                            onClick={handleLogin}>
                            Увійти
                        </button>
                        <Link to={"/registrate/"}>
                            <a className="dropdown-item" type="button">
                                Зареєструватися
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Форма аутинтефікованого юзера */}
                <Link to={`/edituser/`}>
                    <a className="dropdown-item" type="button">
                        Налаштування
                    </a>
                </Link>
                <Link to={"/adminpage"}>
                    {!user ? null : user.is_admin ? (
                        <a className="dropdown-item" type="button">
                            Панель адміністратора
                        </a>
                    ) : null}
                </Link>
                <Link to={"/"}>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={handleLogout}>
                        Вийти
                    </button>
                </Link>
            </div>
        );
    }
}

export default LoginForm;
