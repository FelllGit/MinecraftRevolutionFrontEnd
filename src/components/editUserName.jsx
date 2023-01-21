import React, { useState, useEffect } from "react";
import axios from "axios";

import getUser from "../getInfo/getUserProfile";

const EditUserName = ({ setUserState }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser([setUser]);
    }, [localStorage.getItem("token")]);
    const [formData, setFormData] = useState({ name: "", password: "" });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        formData.email = user.email;
        try {
            const res = await axios.put(
                "http://localhost:80/api/users/" + user.id,
                {
                    name: formData.name,
                    password: formData.password,
                }
            );
            console.log(res.data);
            setUserState(formData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
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
                        placeholder="Name"
                        defaultValue={user ? user.name : formData.name}
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
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    id="changeButton"
                    type="submit"
                    className="btn btn-primary">
                    Оновити ім'я
                </button>
            </form>
    );
};

export default EditUserName;
