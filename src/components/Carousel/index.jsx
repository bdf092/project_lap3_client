import React from 'react'
import Slider from 'react-slick';
import QuizCard from '../QuizCard';
       
const Carousel = ({ cards }) => {
  
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
        {cards.map((item, index) => (
          <QuizCard key={index} data={item} />
        ))}
      </Slider>
      
    </div>
  );
};

export default Carousel