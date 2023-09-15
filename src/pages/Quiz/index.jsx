import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Questions } from "../../components";

import "./quiz.css";

const Quiz = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        async function displayQuestions() {
            const response = await fetch(`https://think-fast.onrender.com/quizzes/${id}`);
            const rawData = await response.json();
            const fetchedQuestions = rawData.questions || [];
            setQuestions(fetchedQuestions);
            setQuiz(rawData.title);
            // console.log(rawData.title)
        }
        displayQuestions();
    }, [id]);

    useEffect(() => {
        const getUserId = async userId => {
            try {
                console.log(localStorage);
            } catch (error) {
                console.error("Error getting userId:", error);
            }
        };
    });

    function getAllCookies() {
        const cookies = document.cookie.split(";");
        const cookieObject = {};

        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split("=");
            cookieObject[name] = decodeURIComponent(value);
        }

        return cookieObject;
    }

    const handleAnsSubmit = isCorrect => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }

        setCurrentQuestion(prevIndex => prevIndex + 1);
        if (currentQuestion === questions.length - 1) {
            setQuizCompleted(true);
            //
            const allCookies = getAllCookies();
            console.log("All cookies:", allCookies);
        }
    };

    const onNextQuestion = () => {
        setCurrentQuestion(prevIndex => prevIndex + 1);
    };

    const updateScore = isCorrect => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
    };

    return (
        <>
            <h1 id="quiztitle">{quiz}</h1>

            {currentQuestion < questions.length ? (
                <Questions
                    onNextQuestion={onNextQuestion}
                    key={questions[currentQuestion]._id}
                    question={questions[currentQuestion]}
                    onSubmit={handleAnsSubmit}
                    updateScore={updateScore}
                />
            ) : (
                quizCompleted && (
                    <>
                        <h2 id="congrats">Congratulations! You have completed the quiz.</h2>
                        <h4 id="score-display">
                            {" "}
                            Total Score: {score}/{questions.length}
                        </h4>
                        <Link to={`/`}>
                            {" "}
                            <button id="backtohomepage">Back to homepage</button>
                        </Link>
                    </>
                )
            )}
        </>
    );
};

export default Quiz;
