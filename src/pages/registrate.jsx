import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Registrate = ({  }) => {
    useEffect(() => {
        if (
            document.getElementById("container") &&
            document.getElementById("container").classList.contains("d-flex")
        ) {
            document.getElementById("container").classList.remove("d-flex");
        }
    }, []);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            formData.password != formData.passwordConfirmation
        ) {
            return;
        }

        // Make API call to register user
        axios
            .post("http://localhost:80/api/users", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        navigate("/");
    };

    return (
        <div
            id="registrateForm"
            className="row text-center align-items-center d-flex justify-content-center">
            <form className="col-md-4" onSubmit={handleSubmit}>
                <label for="basic-url">Ваше ім'я</label>
                <div class="input-group align-items-center d-flex justify-content-center">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">
                            @
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <label for="basic-url">Ваша пошта</label>
                <div class="input-group align-items-center d-flex justify-content-center">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">
                            <i class="bi bi-envelope"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        typeof="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <label for="basic-url">Ваш пароль</label>
                <div class="input-group align-items-center d-flex justify-content-center">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">
                            <i class="bi bi-key"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <label for="basic-url">Підтвердіть пароль</label>
                <div class="input-group align-items-center d-flex justify-content-center">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">
                            <i class="bi bi-key-fill"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        type="password"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                    />
                </div>
                <button
                    id="registrateButton"
                    type="submit"
                    className="btn btn-primary">
                    Зареєструватися
                </button>
            </form>
        </div>
    );
};

export default Registrate;
