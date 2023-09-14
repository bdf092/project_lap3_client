import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Questions } from "../../components";

import "./quiz.css";

const Quiz = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
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
            <h1 id="quiztitle">Quiz 1</h1>
            <h2 id="questiontitle">Question 1</h2>
            <div className="container">
                <div id="qa_section">
                    <div className="ans">
                        <div>
                            {answers.map((answer, index) => (
                                <p
                                    key={index}
                                    className={`individual-ans ${clicked[index] ? "clicked" : ""}`}
                                    onClick={() => handleClick(index)}>
                                    {answer}
                                </p>
                            ))}
                        </div>
                    </div>
                    <button id="submit-button">Submit</button>
                </div>
                <div id="timersection">
                    <p id="timer">Timer: {seconds}</p>
                    <Player
                        id="timerlottie"
                        autoplay
                        loop={true}
                        src="https://lottie.host/06529719-8f17-4ea8-b07d-3e25376bce76/lyhJEsLaGx.json"></Player>
                </div>
            </div>
            <Link to={`/`}>
                {" "}
                <FontAwesomeIcon icon={faCircleArrowLeft} id="backarrow" />{" "}
            </Link>

            <h1>{quiz}</h1>
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
