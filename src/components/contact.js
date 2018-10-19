import React from 'react';
import '../css/contact.css';

export default function Contact (props){
  const emailImgUrl = 'https://upload.wikimedia.org/wikipedia/'+
  'commons/thumb/4/45/New_Logo_Gmail.svg/200px-New_Logo_Gmail.svg.png';
  const linkedInImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/'+
  'thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png';
  return(
    <div className='contact-content' id='contact'>
      <div className='email contact-links'>
        <img 
          src={emailImgUrl}
          alt='Gmail Logo'
          height='61.25'
          width='70'>
        </img><span className='contact-span'>ketsang12@gmail.com</span>
      </div>
      <div className='github contact-links'>
        <img 
          src={require('../pictures/GitHub.png')}
          alt='GitHub Logo'
          height='61.25'
          width='70'>
        </img><span className='contact-span'>kt13</span>
      </div>
      <div className='linkedin contact-links'>
        <img 
          src={linkedInImgUrl}
          alt='LinkedIn Logo'
          height='61.25'
          width='70'>
        </img><span className='contact-span'>kevintsang1</span>
      </div>
    </div>
  );
}