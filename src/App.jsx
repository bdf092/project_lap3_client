import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";


import { HomePage, CreateQuiz, SignUpPage, LoginPage } from "./pages";


const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />



                    <Route path="/createquiz" element={<CreateQuiz />} />
                      
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
