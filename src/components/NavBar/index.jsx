import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav id="navbar">
                <div id="logo">
                    <img src="../../../images/logo.png" alt="Think Fast Logo" />
                </div>

                <div id="links">
                    <NavLink to="/">Quizzes</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/scoreboard">Score Board</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </header>
            <Outlet />
            <footer id="footer">ThinkFast 2023</footer>
        </>
    );
};

export default NavBar;
