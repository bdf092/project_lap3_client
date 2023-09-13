import React, { useState, useEffect } from 'react'
import './quiz.css'

const Quiz = () => {
  const [clicked, setClicked] = useState(Array(4).fill(false)); 

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

  const answers = ["answer 1", "answer 2", "answer 3", "answer 4"];

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds <= 0) return;

    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [seconds]);

  return (
    <>
      <h1>Question 1</h1>
      <div className='container'>
        <p>
        Timer: {seconds}
        </p>
        <div className='ans'>
          <div>
            {answers.map((answer, index) => (
              <p
                key={index}
                className={`individual-ans ${clicked[index] ? 'clicked' : ''}`}
                onClick={() => handleClick(index)}
              >
                {answer}
              </p>
            ))}
          </div>
        </div>
        <button id='submit-button'>Submit</button>
      </div>
    </>
  );
}

export default Quiz