import React from 'react';
import '../css/contact.css';

export default function Contact (props){
  return(
    <div className='contact-content' id='contact'>
      <div className='email contact-links'>
        <a 
          href='mailto:ketsang12@gmail.com'
          target='_blank'  
          rel="noopener noreferrer">
          <img 
            src={require('../pictures/GmailLogo.png')}
            alt='Gmail Logo'
            height='61.25'
            width='70'>
          </img>
        </a>
        <a 
          className='contact-a' 
          href='mailto:ketsang12@gmail.com' 
          target='_blank'  
          rel="noopener noreferrer">ketsang12@gmail.com</a>
      </div>
      <div className='github contact-links'>
        <a
          href='https://github.com/kt13' 
          target='_blank'
          rel="noopener noreferrer">
          <img 
            src={require('../pictures/GitHub.png')}
            alt='GitHub Logo'
            height='61.25'
            width='70'>
          </img>
        </a>
        <a 
          className='contact-a' 
          href='https://github.com/kt13' 
          target='_blank'
          rel="noopener noreferrer">kt13</a>
      </div>
      <div className='linkedin contact-links'>
        <a
          href='https://www.linkedin.com/in/kevintsang1/' 
          target='_blank'
          rel="noopener noreferrer">
          <img 
            src={require('../pictures/LinkedInLogo.png')}
            alt='LinkedIn Logo'
            height='61.25'
            width='70'>
          </img>
        </a><a 
          className='contact-a' 
          href='https://www.linkedin.com/in/kevintsang1/' 
          target='_blank'
          rel="noopener noreferrer">kevintsang1</a>
      </div>
    </div>
  );
}