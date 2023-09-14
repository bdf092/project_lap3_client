import React, { useState, useEffect } from 'react'
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import '../../pages/Quiz/quiz.css'

const questions = ({ question, onSubmit, onNextQuestion, currentQuestion }) => {
    const [clicked, setClicked] = useState(Array(4).fill(false)); 
    const [isAnsCorrect, setIsAnsCorrect] = useState(null)
    const [seconds, setSeconds] = useState(60);
    const [warning, setWarning] = useState(false)

    const answers = question.answer_choices;

    const handleClick = (index) => {
       // Create a copy of the clicked array and toggle the clicked state for the clicked paragraph
       const updatedClicked = [...clicked];
       updatedClicked[index] = !updatedClicked[index];
   
       // Reset the clicked state for all other paragraphs
       for (let i = 0; i < updatedClicked.length; i++) {
         if (i !== index) {
           updatedClicked[i] = false;
         }
       }
   
       setClicked(updatedClicked);
    };

    const handleAnsSubmit = () => {
      onSubmit()
    }  
    
    useEffect(() => {
      
      if (seconds <= 0) {
        onNextQuestion()
        setClicked(Array(4).fill(false))
        setIsAnsCorrect(null)
        setWarning(false)
      } else if (seconds <= 10) {
        setWarning(true)
        // console.log('time almost up')
      }
  
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
  
      return () => clearInterval(timerId);
    }, [seconds, onNextQuestion]);

    const correctAns = (answer) => {
      if (answer === question.correct_answer) {
        // console.log(question)
        // console.log("correct")
        setIsAnsCorrect(true)
      } else {
        // console.log("incorrect")
        // console.log(question)

        setIsAnsCorrect(false)
      }
    }
  
    return (
      <>
        <div id='container'>

          <h2 id='questiontitle'>{question.question}</h2>
          <div className='container'>
            <div id='qa_section'>
              {warning && (
                <p>Time is almost up!</p>
              )}

              <p>
                Timer: <span style={warning ? { fontWeight: 'bold'}: {}}>{seconds}</span>
              </p>
            
              <div id='ans'>
                <div>
                  {answers.map((answer, index) => (

                    <p
                      key={index}
                      className={`individual-ans ${clicked[index] ? 'clicked' : ''}`}
                      onClick={() => {
                        handleClick(index)
                        // console.log(answer)
                        correctAns(answer)
                      }}
                    >
                      {answer}
                    </p>
                  ))}
                </div>
                <button id='submit-button' onClick={handleAnsSubmit}>Submit</button>
              </div>
            <div id='timersection'>
              <p id='timer'>
              Timer: {seconds}
              </p>
              <Player
                      id="timerlottie"
                      autoplay
                      loop={true}
                      src="https://lottie.host/06529719-8f17-4ea8-b07d-3e25376bce76/lyhJEsLaGx.json"></Player>
            </div>
          </div>
        </div>
      </div>
        <Link to={`/`}> <FontAwesomeIcon icon={faCircleArrowLeft} id='backarrow'/> </Link> 
      </>
    );
}

export default questions
