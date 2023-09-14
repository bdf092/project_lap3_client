import React, { useState } from "react";
import { CreateQuizForm } from "../../components";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./CreateQuiz.css";

export default function CreateQuiz() {
    
    const [message, setMessage] = useState("");

    return (
        <div>
            <h1 id="addquestiontitle">Create a quiz</h1>
            <Player
                id="lottie"
                autoplay
                loop={true}
                src="https://lottie.host/946b8faa-dde7-47bc-bd5c-74d22034fcc9/gdYcYaygC9.json"></Player>
            <div id="createquizform">
                <CreateQuizForm setMessage={setMessage}/>
            </div>
            <p id="message">{message}</p>
         <Link to={`/`}> <FontAwesomeIcon icon={faCircleArrowLeft} id='backarrow'/> </Link>  
         
        </div>
    );
}
