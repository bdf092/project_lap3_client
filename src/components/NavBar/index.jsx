import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img src="../../../images/logo.png" alt="Think Fast Logo" />
                </div>

                <div className="links">
                    <NavLink to="/">Quizzes</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/scoreboard">Score Board</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </header>
            <Outlet />
            <footer id="footer">Think-Fast 2023</footer>
        </>
    );
};

export default NavBar;
