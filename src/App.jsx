import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NavBar />}></Route>
            </Routes>
        </div>
    );
};

export default App;
