import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
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
            </nav>
            <Outlet />
            
        </>
    );
};

export default NavBar;
