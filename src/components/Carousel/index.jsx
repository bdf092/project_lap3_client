import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import QuizCard from '../QuizCard';
       
const Carousel = () => {
  
  const [quizzes, setQuizzes] = useState([]);
   
    const { id } = useParams();

    useEffect(() => {
        async function loadQuizzes() {
            const response = await fetch("https://think-fast.onrender.com/quizzes/");
            const data = await response.json();
            setQuizzes(data);
        };
        
        loadQuizzes();
    }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 700,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
      ]
  };

  return (
    <div className="carousel">
      <Slider role='slider' {...settings}>
        {quizzes.map((quiz) => (
          
            <QuizCard key={quiz._id} data={quiz} />
          
        ))}
      </Slider>
      
    </div>
  );
};

export default Carousel