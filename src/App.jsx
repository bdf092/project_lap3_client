import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";

import { CreateQuiz, SignUpPage, LoginPage } from "./pages";


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route path="/signup" element={<SignUpPage />} />



                    <Route path="/createquiz" element={<CreateQuiz />} />
                      
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
