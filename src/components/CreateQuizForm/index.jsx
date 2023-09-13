
import React, { useState } from 'react';

const CreateQuizForm = ({setMessage}) => {
    const [step, setStep] = useState(0);
    const [quizTitle, setQuizTitle] = useState('');
    const initialQuestions = [
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
        { question: '', correct_answer: '', incorrect_answer1: '', incorrect_answer2: '', incorrect_answer3: '' },
    ];
    const [questions, setQuestions] = useState(initialQuestions);

    const handleQuizTitleChange = (e) => {
        setQuizTitle(e.target.value);
    };

    const handleInputChange = (e, index, field) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = e.target.value;
        setQuestions(newQuestions);
    };

    const handleNextClick = () => {
        if (step === 0 && quizTitle.trim() === '') {
            setMessage('Please enter a quiz title.');
        } else if (step > 0) {
            const currentQuestion = questions[step - 1];
            if (
                currentQuestion.question.trim() === '' ||
                currentQuestion.correct_answer.trim() === '' ||
                currentQuestion.incorrect_answer1.trim() === '' ||
                currentQuestion.incorrect_answer2.trim() === '' ||
                currentQuestion.incorrect_answer3.trim() === ''
            ) {
                setMessage('Please fill out all fields for the current questions.');
                return;
            }
        }

        if (step < 5) {
            setStep(step + 1);
        }
        setMessage('');
    };

    const handleBackClick = () => {
        if (step > 0) {
            setStep(step - 1);
        }
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validQuestions = questions.filter(
            (q) =>
                q.question.trim() !== '' &&
                q.correct_answer.trim() !== '' &&
                q.incorrect_answer1.trim() !== '' &&
                q.incorrect_answer2.trim() !== '' &&
                q.incorrect_answer3.trim() !== ''
        );

        if (quizTitle.trim() === '' || validQuestions.length < 10) {
            setMessage('Please enter a quiz title and fill out all fields for each question.');
            setTimeout(() => {
                setMessage('');
            }, 5000);
        
        } else {
            const requestBody = {
                title: quizTitle,
                questions: validQuestions,
            };

            try {
                const response = await fetch('http://localhost:3000/quizzes', {
                    method: 'POST',
                    body: JSON.stringify(requestBody),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                if (response.ok) {
                    setMessage('Quiz created successfully.');
                    setTimeout(() => {
                        setMessage('');
                    }, 5000);
                } else {
                    setMessage('There was a problem in creating your quiz.');
                    setTimeout(() => {
                        setMessage('');
                    }, 5000);
                }
            } catch (error) {
                console.error(error);
                setMessage('There was an error while communicating with the server.');
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            }
        }
    };
       
    return (
        <>
            <form onSubmit={handleSubmit}>
                {step === 0 && (
                    <div>
                        <input
                            placeholder="Title of your quiz"
                            id="quiz_title"
                            value={quizTitle}
                            type="text"
                            className="quiz_title"
                            onChange={handleQuizTitleChange}
                        />
                    </div>
                )}
                {questions.slice(step * 2, step * 2 + 2).map((question, index) => (
                    <div key={index}>
                        <br />
                        <input
                            placeholder={`Question ${step * 2 + index + 1}`}
                            value={question.question}
                            type="text"
                            className="question"
                            onChange={(e) => handleInputChange(e, step * 2 + index, 'question')}
                        />
                        <input
                            placeholder={`Correct Answer ${step * 2 + index + 1}`}
                            value={question.correct_answer}
                            type="text"
                            className="correct-answer"
                            onChange={(e) => handleInputChange(e, step * 2 + index, 'correct_answer')}
                        />
                        <input
                            placeholder={`Incorrect Answer 1`}
                            value={question.incorrect_answer1}
                            type="text"
                            className="incorrect-answer"
                            onChange={(e) => handleInputChange(e, step * 2 + index, 'incorrect_answer1')}
                        />
                        <input
                            placeholder={`Incorrect Answer 2`}
                            value={question.incorrect_answer2}
                            type="text"
                            className="incorrect-answer"
                            onChange={(e) => handleInputChange(e, step * 2 + index, 'incorrect_answer2')}
                        />
                        <input
                            placeholder={`Incorrect Answer 3`}
                            value={question.incorrect_answer3}
                            type="text"
                            className="incorrect-answer"
                            onChange={(e) => handleInputChange(e, step * 2 + index, 'incorrect_answer3')}
                        />
                    </div>
                ))}
                <div id="buttons">
                    {step > 0 && (
                        <button type="button" id="back-button" onClick={handleBackClick}>
                            Back
                        </button>
                    )}
                    <button type="button" id="next-button" onClick={handleNextClick}>
                        Next
                    </button>
                    {step === 4 && (
                        <button type="submit" id="create-button">
                            Create
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}

export default CreateQuizForm;
