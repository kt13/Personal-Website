import React from 'react';
import '../css/projects.css';
import WeatherPng from '../pictures/WeatherFM-FP.png';
import SakuraLearningPng from '../pictures/SakuraLearning-FP.png';
import FoodForYouPng from '../pictures/FoodForYou.png';

export default function Projects (props){
  return(
    <div className='projects-content' id='projects'>
      <div className='content-box unique'>
        <h3 className='project-name'>WeatherFM</h3>  
        <div className='content'>
          <div className='float'>
            <p>React, Redux, MongoDB, NodeJS, Express, Mocha/Chai, Enzyme/Jest </p>
            <p>A mood-music app to personalize the way a person experiences their current, local weather.</p> 
            <div className='links'>
              <a 
                className='project-link'
                href='https://weatherfm-client.herokuapp.com/' 
                target='_blank'
                rel="noopener noreferrer">Live</a>
              <a 
                className='project-link'
                href='https://github.com/thinkful-ei22/WeatherFM-Client-PurpleCobras' 
                target='_blank'
                rel="noopener noreferrer">Client-Side Repository</a>
              <a 
                className='project-link'
                href='https://github.com/thinkful-ei22/WeatherFM-Backend-PurpleCobras' 
                target='_blank'
                rel="noopener noreferrer">Server-Side Repository</a>
            </div>
            <img 
              className='project-img' 
              src={WeatherPng} 
              alt='WeatherFM Landing Page'
              height='330' 
              width='450'></img>
          </div>
          
        </div>
      </div>

      <div className='content-box'>
        <h3 className='project-name'>Sakura Learning</h3>  
        <div className='content'>
          <div className='float'>
            <p>React, Redux, MongoDB, NodeJS, Express, Mocha/Chai, Enzyme/Jest </p>
            <p>An efficient Japanese-learning App built upon a spaced-repetition algorithm using a linked-list.</p> 
            <div className='links'>
              <a 
                className='project-link'
                href='https://spaced-rep-client-dev.herokuapp.com/' 
                target='_blank'
                rel="noopener noreferrer">Live</a>
              <a 
                className='project-link'
                href='https://github.com/thinkful-ei22/kev-dev-spaced-rep-client' 
                target='_blank'
                rel="noopener noreferrer">Client-Side Repository</a>
              <a 
                className='project-link'
                href='https://github.com/thinkful-ei22/kev-dev-spaced-rep-server' 
                target='_blank'
                rel="noopener noreferrer">Server-Side Repository</a>
            </div>
            <img 
              className='project-img' 
              src={SakuraLearningPng} 
              alt='Food For You Search Page'
              height='330' 
              width='450'></img>
          </div>
        </div>
          
      </div>

      <div className='content-box unique-2'>
        <h3 className='project-name'>Food For You</h3>  
        <div className='content'>
          <div className='float'>
            <p>React, Redux, MongoDB, NodeJS, Express, Mocha/Chai, Enzyme/Jest </p>
            <p>A food-allergen query app aimed at food allergy sufferers to determine a food's allergens.</p> 
            <div className='links'>
              <a 
                className='project-link'
                href='https://intense-journey-81653.herokuapp.com/' 
                target='_blank'
                rel="noopener noreferrer">Live</a>
              <a 
                className='project-link'
                href='https://github.com/thinkful-ei22/Kevin-allergy-client' 
                target='_blank'
                rel="noopener noreferrer">Client-Side Repository</a>
              <a 
                className='project-link'
                href='https://github.com/thinkful-ei22/Kevin-allergy-server' 
                target='_blank'
                rel="noopener noreferrer">Server-Side Repository</a>
            </div>
            <img 
              className='project-img' 
              src={FoodForYouPng} 
              alt='Food For You Search Page'
              height='330' 
              width='450'></img>
          </div>
          
        </div>
      </div>
    </div>
  );
}