import React from 'react';
import '../css/projects.css';
import png from '../pictures/frontpage.png';

export default function Projects (props){
  return(
    <div className='projects-content' id='projects'>
      <h2>Projects</h2>
      <div className='content-box'>
        <h3>WeatherFM</h3>  
        <div className='content'>
          <div className='float'>
            <p>React, Redux, MongoDB, NodeJS, Express, Mocha/Chai, Enzyme/Jest </p>
            <p>A mood-music app to personalize the way a person experiences weather.</p> 
            <div className='links'>
              <a href='https://weatherfm-client.herokuapp.com/'>Live</a>
              <a href='https://github.com/thinkful-ei22/WeatherFM-Client-PurpleCobras'>Client-Side Repository</a>
              <a href='https://github.com/thinkful-ei22/WeatherFM-Backend-PurpleCobras'>Server-Side Repository</a>
            </div>
          </div>
          <img className='project-img' src={png} height='300' width='400'></img>
        </div>
      </div>
       
      <h2>Project 2</h2>  
      <p>Filler Text2</p>  


      <h2>Project 3</h2>  
      <p>Filler Text3</p>

      <h2>Project 3</h2>  
      <p>Filler Text3</p>
    </div>
  );
}