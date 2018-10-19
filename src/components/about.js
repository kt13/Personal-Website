import React from 'react';
import '../css/about.css';

export default function About (props){
  return(
    <div className='about-me-content' id='about'>
      <p> 
        I graduated from the University of Maryland - College Park with a BS in 
        Microbiology, looking to make a difference in the world of medicine. 
        However, growing up in the suburbs of Montgomery County, Maryland, I had always looked up to my mother 
        - a highly successful government project manager. 
        Wanting to expand into different horizons, I applied myself into the tech field. 
        Learning about all these technologies - I found - was extremely for me. 
        Learning all these languages and building things, I realized, felt amazing. </p>
        
      <p>I am thoroughly hooked.</p>
     
      <h3 className='h3-about'>My Skills</h3>
      <ul className='ul-about'>
        <li>
          Manage data flow with React
        </li>
        <li>
          Manage state with Redux
        </li>
        <li>
          Create RESTful APIs
        </li>
        <li>
          Create SQL and noSQL databases
        </li>
        <li>
          Authenticate User Sessions
        </li>
        <li>
          Implement Unit Testing on the Frontend and Backend
        </li>
        <li>
          Design Wireframes
        </li>
        <li>
          Style with CSS and React
        </li>
      </ul>
    </div>
  );
}