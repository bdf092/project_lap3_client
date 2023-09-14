import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav id="navbar">
                <div id="logo">
                    <img src="../../../images/logo.png" alt="Think Fast Logo" />
                </div>

                <div id="links">
                    <NavLink to="/" role="link">Quizzes</NavLink>
                    <NavLink to="/profile" role="link">Profile</NavLink>
                    <NavLink to="/scoreboard" role="link">Score Board</NavLink>
                    <NavLink to="/login" role="link">Log In</NavLink>
                    <NavLink to="/signup" role="link">Sign Up</NavLink>
                </div>
            </nav>
            <Outlet />
            <footer id="footer">ThinkFast 2023</footer>
        </>
    );
};

export default NavBar;
