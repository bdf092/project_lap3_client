import React, { useState, useEffect } from 'react'

const questions = ({ question, onSubmit }) => {
    const [clicked, setClicked] = useState(Array(4).fill(false)); 
    const [isAnsCorrect, setIsAnsCorrect] = useState(null)

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
    // const setQuestion = question.question
  
    const answers = question.answer_choices;
  
    const [seconds, setSeconds] = useState(60);
  
    useEffect(() => {
      if (seconds <= 0) return;
  
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
  
      return () => clearInterval(timerId);
    }, [seconds]);

    const correctAns = (answer) => {
      if (answer === question.correct_answer) {
        console.log(question)
        console.log("correct")
        setIsAnsCorrect(true)
      } else {
        console.log("incorrect")
        console.log(question)

        setIsAnsCorrect(false)
      }
    }
  
    return (
      <>
        
        <div id='container'>
          <h1></h1>
          <h2>{question.question}</h2>
          <p>
          Timer: {seconds}
          </p>
          <div id='ans'>
            <div>
              {answers.map((answer, index) => (

                
                <p
                  key={index}
                  className={`individual-ans ${clicked[index] ? 'clicked' : ''}`}
                  onClick={() => {
                    handleClick(index)
                    console.log(answer)
                    correctAns(answer)
                  }}
                  
                >
                  {answer}
                </p>
              ))}
            </div>
          </div>
          <button id='submit-button' onClick={handleAnsSubmit}>Submit</button>
        </div>
      </>
    );
}

export default questions