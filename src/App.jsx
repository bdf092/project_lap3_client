import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, RequireAuth } from "./components";
import { AuthProvider } from "./context/AuthProvider";

import { HomePage, CreateQuiz, SignUpPage, LoginPage, Quiz, Scoreboard, NotFound } from "./pages";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />

                    <Route path="/quiz" element={<Quiz />} />

                    <Route element={<RequireAuth />}>
                        <Route path="/createquiz" element={<CreateQuiz />} />
                        <Route path="/scoreboard" element={<Scoreboard />} />
                    </Route>

                    <Route path="/login" element={<LoginPage />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default App;
