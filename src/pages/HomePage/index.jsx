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
            <h1 className='hometitle'>Quizzes</h1>
            </div>
              <Carousel />
              <br />
            </>

        )
}

export default HomePage;
