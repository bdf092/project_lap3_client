import React, { useState, useEffect } from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
      <h1 id='quiztitle'>Quiz 1</h1>
      <h2 id='questiontitle'>Question 1</h2>
      <div className='container'>
        <div id='qa_section'>
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
      <Link to={`/`}> <FontAwesomeIcon icon={faCircleArrowLeft} id='backarrow'/> </Link> 
    </>
  );
}

export default Quiz
