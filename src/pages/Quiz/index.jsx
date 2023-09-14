import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Questions } from '../../components';
import './quiz.css'

const Quiz = () => {
  const {id} = useParams();
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    async function displayQuestions() {
    const response = await fetch(`https://think-fast.onrender.com/quizzes/${id}`)
    const rawData = await response.json();
    const fetchedQuestions = rawData.questions || []
    setQuestions(fetchedQuestions)
    // console.log(rawData.questions[currentQuestion])
    }
    displayQuestions()
  }, [id])

  const handleAnsSubmit = () => {
    setCurrentQuestion((prevIndex) => prevIndex + 1)
  }

  return (
    <>
      {currentQuestion < questions.length ? (
        <Questions key={questions[currentQuestion]._id} question={questions[currentQuestion]} onSubmit={handleAnsSubmit}/>
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
}

export default Quiz