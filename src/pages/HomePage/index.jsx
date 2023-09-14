import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../../components/Carousel';
import './HomePage.css';



const HomePage = () => {
    
          
         
        
        
        return (
            <>
            <div className='undernav'>
            <h1 id='hometitle'>Quizzes</h1>
           <Link to={`/createquiz`}><button id='createbutton'>Create Quiz</button></Link>
            </div>
              <Carousel />
              <br />
            </>

        )
}

export default HomePage;
