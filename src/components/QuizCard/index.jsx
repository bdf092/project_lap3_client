import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const QuizCard = ({ data }) => {
  // const {
  //   image,
  //   imageAlt,
  //   imageTitle,
  //   imageSocial,
  //   imageSocialAlt,
  //   imageSocialTitle,
  //   title,
  //   subTitle,
  //   text,
  //   link,
  // } = data;

  return (
    <figure className="card-container">
      <div className="card">
        {/* <img className="card-hero-img" src={image} alt={imageAlt} title={imageTitle} /> */}
        
        <div className="card-heading-container">
          
          {/* <img
            className="card-social-icon"
            src={imageSocial}
            alt={imageSocialAlt}
            title={imageSocialTitle}
          /> */}
          <div className="card-title-container">
            <h3 className="card-title">{data.title}</h3>
            <img className='bio-img' src="src\assets\biology-quiz.png" alt="biology image" />
            {/* <p className="card-sub-title">{subTitle}</p> */}
          </div>
        </div>
        <div className="card-text-container">
          {/* <p className="card-text">{text}</p> */}
        </div>
        <div>
          <Link to={'/quiz'} className='bottom'><button>Start Quiz</button></Link>
        </div>
      </div>
      {/* <a href={link} target="_blank" />
      <Link to={`/quizzes/${id}`}></Link> */}
    </figure>
  );
};

export default QuizCard