import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const QuizCard = ({ data }) => {


  return (
    <figure id="card-container">
      <div id="card">
        {/* <img className="card-hero-img" src={image} alt={imageAlt} title={imageTitle} /> */}
        
        <div id="card-heading-container">
          
          {/* <img
            id="card-social-icon"
            src={imageSocial}
            alt={imageSocialAlt}
            title={imageSocialTitle}
          /> */}
          <div id="card-title-container">
            <h3 id="card-title">{data.title}</h3>
            <img id='bio-img' src="/images/biology-quiz.png" alt="biology image" />
            {/* <p className="card-sub-title">{subTitle}</p> */}
          </div>
        </div>
        <div id="card-text-container">
          {/* <p className="card-text">{text}</p> */}
        </div>
        <div>
          <Link 
            to={`${data._id}`}
            key={data._id}
            id='bottom'
          >
            <button>Start Quiz</button></Link>
        </div>
      </div>
      {/* <a href={link} target="_blank" />
      <Link to={`/quizzes/${id}`}></Link> */}
    </figure>
  );
};

export default QuizCard
