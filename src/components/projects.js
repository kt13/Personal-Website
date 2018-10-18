import React from 'react';
import '../css/projects.css';

export default function Projects (props){
  return(
    <div className='projects-content' id='projects'>
      <div>
        <h2>WeatherFM</h2>  
        <p>React, Redux, MongoDB, NodeJS, Express, Mocha/Chai, Enzyme/Jest </p>
        <p>A mood-music app to personalize the way a person experiences weather.</p> 
        
        <div className='links'>
          <a href='https://weatherfm-client.herokuapp.com/'>Live</a>
          <a href='https://github.com/thinkful-ei22/WeatherFM-Client-PurpleCobras'>Client-Side Repository</a>
          <a href='https://github.com/thinkful-ei22/WeatherFM-Backend-PurpleCobras'>Server-Side Repository</a>
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