import React, { useState } from "react";
import { CreateQuizForm } from "../../components";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import "./CreateQuiz.css";

export default function CreateQuiz() {
    const [quizTitle, setQuizTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <h1 className="addquestiontitle">Create a quiz</h1>
            <Player
                className="lottie"
                autoplay
                loop={true}
                src="https://lottie.host/946b8faa-dde7-47bc-bd5c-74d22034fcc9/gdYcYaygC9.json"></Player>
            <div className="createquizform">
                <CreateQuizForm
                    quizTitle={quizTitle}
                    setQuizTitle={setQuizTitle}
                    question={question}
                    setQuestion={setQuestion}
                    answer={answer}
                    setAnswer={setAnswer}
                    setMessage={setMessage}
                    
                />
            </div>
            <p className="message">{message}</p>
         <Link to={`/`}> <FontAwesomeIcon icon={faCircleArrowLeft}className='backarrow'/> </Link>  
         
        </div>
    );
}
