import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <nav id="navbar">
                <div id="logo">
                    <img src="../../../images/logo.png" alt="Think Fast Logo" id="logo" />
                </div>

                <div id="links">
                    <NavLink to="/" role="link">
                        Quizzes
                    </NavLink>
                    <NavLink to="/scoreboard" role="link">
                        Score Board
                    </NavLink>
                    <NavLink id="login" to="/login" role="link">
                        Log In
                    </NavLink>
                </div>
            </nav>
            <Outlet />
            <footer id="footer">ThinkFast 2023</footer>
        </>
    );
};

export default NavBar;
