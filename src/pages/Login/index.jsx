import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";

import "./login.css";

const Login = () => {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const container = useRef(null);

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://think-fast.onrender.com/auth",
                JSON.stringify({ user, pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;

            setAuth({ user, pwd, accessToken });
            setUser("");
            setPwd("");
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section className="loginForm">
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/">Go to Home</Link>
                    </p>
                </section>
            ) : (
                <section className="loginForm">
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1 className="signin">Sign In</h1>
                    <form id="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={e => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={e => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?
                        <br />
                        <Link to="/signup" style={{ textDecoration: "underline" }}>
                            Sign up
                        </Link>
                    </p>
                </section>
            )}
            <div id="container" ref={container}></div>
        </>
    );
};

export default Login;
