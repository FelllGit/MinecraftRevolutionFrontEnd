import React, { useState, useEffect, useRef } from "react";
import {
    useLocation,
    BrowserRouter,
    Routes,
    Route,
    Link,
    renderMatches,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import logo from "./logo.svg";
import "./App.css";

import getUser from "./getInfo/getUserProfile";

import Header from "./components/header";
import Footer from "./components/footer";
import MainPageHeader from "./components/mainPageHeader";

import Main from "./pages/main";
import Post from "./pages/post";
import Posts from "./pages/posts";
import Users from "./pages/users";
import Registrate from "./pages/registrate";
import EditUser from "./pages/edituser";
import User from "./pages/user";
import AdminPage from "./pages/adminpage";
import CompilationErrorPage from "./pages/404";

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser([setUser]);
    }, []);
    let picture = useRef();

    document.getElementById("root").classList.add("d-flex", "flex-column");

    return (
        <ErrorBoundary FallbackComponent={CompilationErrorPage}>
            <BrowserRouter>
                <Header user={user} setUser={setUser} picture={picture} />
                <MainPageHeader picture={picture} />

                <div className="container h-100" id="container">
                    <Routes className="h-100">
                        <Route exact path="/" element={<Main />} />
                        <Route path="/posts/:id" element={<Post />} />
                        <Route path="/posts/" element={<Posts user={user} />} />
                        <Route path="/users/" element={<Users user={user} />} />
                        <Route
                            path="/edituser"
                            element={
                                <EditUser user={user} setUserState={setUser} />
                            }
                        />
                        <Route
                            path="/adminpage"
                            element={<AdminPage user={user} />}
                        />
                        <Route path="/user/:id" element={<User />} />
                        <Route
                            path="/adminpage"
                            element={<AdminPage user={user} />}
                        />
                        <Route path="/registrate/" element={<Registrate />} />
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
