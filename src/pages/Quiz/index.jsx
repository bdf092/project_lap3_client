import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Questions } from "../../components";

import "./quiz.css";

const Quiz = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [clicked, setClicked] = useState([]);
    const [seconds, setSeconds] = useState(10);
    const [quiz, setQuiz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        async function displayQuestions() {
            const response = await fetch(`https://think-fast.onrender.com/quizzes/${id}`);
            const rawData = await response.json();
            const fetchedQuestions = rawData.questions || [];
            setQuestions(fetchedQuestions);
            setQuiz(rawData.title);
            console.log(rawData.title);
        }
        displayQuestions();
    }, [id]);
    const handleAnsSubmit = () => {
        setCurrentQuestion(prevIndex => prevIndex + 1);
    };

    return (
        <>
            <h1 id="quiztitle">{quiz}</h1>

            {currentQuestion < questions.length ? (
                <Questions
                    key={questions[currentQuestion]._id}
                    question={questions[currentQuestion]}
                    onSubmit={handleAnsSubmit}
                />
            ) : (
                currentQuestion === questions.length && (
                    <>
                        <h2>Congratulations! You have completed the quiz.</h2>
                        <button>back to homepage</button>
                    </>
                )
            )}
        </>
    );
};

export default Quiz;
