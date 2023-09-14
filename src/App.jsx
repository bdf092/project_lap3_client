import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";


import { HomePage, CreateQuiz, SignUpPage, LoginPage, Quiz, Scoreboard, NotFound } from "./pages";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />

                    <Route path="/:id" element={<Quiz/>}/>

                    <Route path="/createquiz" element={<CreateQuiz />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/scoreboard" element={<Scoreboard />} />
                    <Route path="*" element={< NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
