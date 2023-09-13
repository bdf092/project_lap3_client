import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';



const HomePage = () => {

    const { id } = useParams();

    let cards = [
		
		// 			 CARD 1
		
		{
			image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
			imageAlt: "Placeholder Icon",
			imageTitle: "Placeholder Icon",
			imageSocial:
				"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
			imageSocialAlt: "Placeholder Icon",
			imageSocialTitle: "Placeholder Icon",
			link: `https://localhost:3000/${id}`,
			title: "Quiz Title",
			subTitle: "Quiz Subtitle",
			text:
				"This is some placeholder text to briefly describe the quiz."
		},

		// 			 CARD 2
		
		{
			image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
			imageAlt: "Placeholder Icon",
			imageTitle: "Placeholder Icon",
			imageSocial:
				"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
			imageSocialAlt: "Placeholder Icon",
			imageSocialTitle: "Placeholder Icon",
			link: `https://localhost:3000/${id}`,
			title: "Quiz Title",
			subTitle: "Quiz Subtitle",
			text:
				"This is some placeholder text to briefly describe the quiz."
		},
		
		// 			 CARD 3
		
		{
			image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
			imageAlt: "Placeholder Icon",
			imageTitle: "Placeholder Icon",
			imageSocial:
				"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
			imageSocialAlt: "Placeholder Icon",
			imageSocialTitle: "Placeholder Icon",
			link: `https://localhost:3000/${id}`,
			title: "Quiz Title",
			subTitle: "Quiz Subtitle",
			text:
				"This is some placeholder text to briefly describe the quiz."
		},

		// 			 CARD 4

		{
			image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
			imageAlt: "Placeholder Icon",
			imageTitle: "Placeholder Icon",
			imageSocial:
				"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
			imageSocialAlt: "Placeholder Icon",
			imageSocialTitle: "Placeholder Icon",
			link: `https://localhost:3000/${id}`,
			title: "Quiz Title",
			subTitle: "Quiz Subtitle",
			text:
				"This is some placeholder text to briefly describe the quiz."
		},

		// 			 CARD 5
		
		{
			image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
			imageAlt: "Placeholder Icon",
			imageTitle: "Placeholder Icon",
			imageSocial:
				"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
			imageSocialAlt: "Placeholder Icon",
			imageSocialTitle: "Placeholder Icon",
			link: `https://localhost:3000/${id}`,
			title: "Quiz Title",
			subTitle: "Quiz Subtitle",
			text:
				"This is some placeholder text to briefly describe the quiz."
		},

		// 			 CARD 6
		
		{
			image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
			imageAlt: "Placeholder Icon",
			imageTitle: "Placeholder Icon",
			imageSocial:
				"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
			imageSocialAlt: "Placeholder Icon",
			imageSocialTitle: "Placeholder Icon",
			link: `https://localhost:3000/${id}`,
			title: "Quiz Title",
			subTitle: "Quiz Subtitle",
			text:
				"This is some placeholder text to briefly describe the quiz."
		}
	];

    const Article = ({ data }) => {
        const {
          image,
          imageAlt,
          imageTitle,
          imageSocial,
          imageSocialAlt,
          imageSocialTitle,
          title,
          subTitle,
          text,
          link,
        } = data;

        return (
            <figure id="card-container">
              <div id="card">
                <img id="card-hero-img" src={image} alt={imageAlt} title={imageTitle} />
                <div id="card-heading-container">
                  <img
                    id="card-social-icon"
                    src={imageSocial}
                    alt={imageSocialAlt}
                    title={imageSocialTitle}
                  />
                  <div id="card-title-container">
                    <h3 id="card-title">{title}</h3>
                    <p id="card-sub-title">{subTitle}</p>
                  </div>
                </div>
                <div id="card-text-container">
                  <p id="card-text">{text}</p>
                </div>
              </div>
              <a href={link} target="_blank" />
            </figure>
          );
        };
        
       
        const Carousel = () => {
            const settings = {
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
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
              <div id="carousel">
                <Slider {...settings}>
                  {cards.map((item, index) => (
                    <Article key={index} data={item} />
                  ))}
                </Slider>
               
              </div>
            );
          };
          
         
        
        
        return (
            <>
            <h1 id='hometitle'>Quizzes</h1>
			<Link to={`/createquiz`}> <button id='createbutton'> Create Quiz </button> </Link> 
              <Carousel />
              <br />
            </>

        )
}

export default HomePage


    