import React, { useState, useEffect } from "react";
import axios from "axios";

import getUser from "../getInfo/getUserProfile";

const EditUserName = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser([setUser]);
    }, [localStorage.getItem("token")]);
    const [formData, setFormData] = useState({
        password: "",
        newPassword: "",
        passwordConfirmation: "",
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        formData.name = user.name;
        formData.email = user.email;
        try {
            if(formData.newPassword != formData.passwordConfirmation){
                console.log("Passwords don't match");
                return;
            }
            const res = await axios.put(
                "http://localhost:80/api/users/" + user.id,
                {
                    password: formData.password,
                    newPassword: formData.newPassword,
                }
            );
            console.log(res.data);
        } catch (err) {
            console.log(user);
        }
    };

    return (
            <form className="col-md-4" onSubmit={handleSubmit}>
                <label for="basic-url">Ваш поточний пароль</label>
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
                        onChange={handleChange}
                    />
                </div>
                <br />
                <label for="basic-url">Новий пароль </label>
                <div class="input-group align-items-center d-flex justify-content-center">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">
                            <i class="bi bi-key"></i>
                        </span>
                    </div>
                    <input
                        type="password"
                        class="form-control"
                        id="newPassword"
                        name="newPassword"
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
                        type="password"
                        class="form-control"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        onChange={handleChange}
                    />
                </div>
                <br />
                <button
                    id="changeButton"
                    type="submit"
                    className="btn btn-primary">
                    Оновити пароль
                </button>
            </form>
    );
};

export default EditUserName;
