import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../../components/Carousel';
import './HomePage.css';



const HomePage = () => {
    

    // function displaySnacks() {
    //     return quizzes
    //             .filter(q => !vegetarianOnly || s.vegetarian)
    //             .filter(q => !healthyOnly || s.healthy)
    //             .filter(q => textFilter.length == 0 || q.name.toLowerCase().includes(textFilter.toLowerCase()))
    //             .map(q => <QuizCard key={q.id} id={q.id} truefalse={q.truefalse} multiple={q.multiple} />)
    // }



  //   let cards = [
		
	// 	// 			 CARD 1
		
	// 	{
	// 		image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
	// 		imageAlt: "Placeholder Icon",
	// 		imageTitle: "Placeholder Icon",
	// 		imageSocial:
	// 			"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
	// 		imageSocialAlt: "Placeholder Icon",
	// 		imageSocialTitle: "Placeholder Icon",
	// 		link: `https://localhost:3000/quizzes/${id}`,
	// 		title: "Quiz Title",
	// 		subTitle: "Quiz Subtitle",
	// 		text:
	// 			"This is some placeholder text to briefly describe the quiz."
	// 	},

	// 	// 			 CARD 2
		
	// 	{
	// 		image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
	// 		imageAlt: "Placeholder Icon",
	// 		imageTitle: "Placeholder Icon",
	// 		imageSocial:
	// 			"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
	// 		imageSocialAlt: "Placeholder Icon",
	// 		imageSocialTitle: "Placeholder Icon",
	// 		link: `https://localhost:3000/quizzes/${id}`,
	// 		title: "Quiz Title",
	// 		subTitle: "Quiz Subtitle",
	// 		text:
	// 			"This is some placeholder text to briefly describe the quiz."
	// 	},
		
	// 	// 			 CARD 3
		
	// 	{
	// 		image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
	// 		imageAlt: "Placeholder Icon",
	// 		imageTitle: "Placeholder Icon",
	// 		imageSocial:
	// 			"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
	// 		imageSocialAlt: "Placeholder Icon",
	// 		imageSocialTitle: "Placeholder Icon",
	// 		link: `https://localhost:3000/quizzes/${id}`,
	// 		title: "Quiz Title",
	// 		subTitle: "Quiz Subtitle",
	// 		text:
	// 			"This is some placeholder text to briefly describe the quiz."
	// 	},

	// 	// 			 CARD 4

	// 	{
	// 		image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
	// 		imageAlt: "Placeholder Icon",
	// 		imageTitle: "Placeholder Icon",
	// 		imageSocial:
	// 			"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
	// 		imageSocialAlt: "Placeholder Icon",
	// 		imageSocialTitle: "Placeholder Icon",
	// 		link: `https://localhost:3000/quizzes/${id}`,
	// 		title: "Quiz Title",
	// 		subTitle: "Quiz Subtitle",
	// 		text:
	// 			"This is some placeholder text to briefly describe the quiz."
	// 	},

	// 	// 			 CARD 5
		
	// 	{
	// 		image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
	// 		imageAlt: "Placeholder Icon",
	// 		imageTitle: "Placeholder Icon",
	// 		imageSocial:
	// 			"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
	// 		imageSocialAlt: "Placeholder Icon",
	// 		imageSocialTitle: "Placeholder Icon",
	// 		link: `https://localhost:3000/quizzes/${id}`,
	// 		title: "Quiz Title",
	// 		subTitle: "Quiz Subtitle",
	// 		text:
	// 			"This is some placeholder text to briefly describe the quiz."
	// 	},

	// 	// 			 CARD 6
		
	// 	{
	// 		image: "https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1558290036/img/website-banner.jpg",
	// 		imageAlt: "Placeholder Icon",
	// 		imageTitle: "Placeholder Icon",
	// 		imageSocial:
	// 			"https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
	// 		imageSocialAlt: "Placeholder Icon",
	// 		imageSocialTitle: "Placeholder Icon",
	// 		link: `https://localhost:3000/quizzes/${id}`,
	// 		title: "Quiz Title",
	// 		subTitle: "Quiz Subtitle",
	// 		text:
	// 			"This is some placeholder text to briefly describe the quiz."
	// 	}
	// ];
          
         
        
        
        return (
            <>
            <div className='undernav'>
            <h1 className='hometitle'>Quizzes</h1>
            </div>
              <Carousel />
              <br />
            </>

        )
}

export default HomePage


    