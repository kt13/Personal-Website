import React from 'react';
import '../css/contact.css';

export default function Contact (props){
  const emailImgUrl = 'https://upload.wikimedia.org/wikipedia/'+
  'commons/thumb/4/45/New_Logo_Gmail.svg/200px-New_Logo_Gmail.svg.png';
  const linkedInImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/'+
  'thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png';
  return(
    <div className='contact' id='contact'>
      <div className='email'>
        <img 
          src={emailImgUrl}
          height='61.25'
          width='70'>
        </img><span>ketsang12@gmail.com</span>
      </div>
      <div className='github'>
        <img 
          src={require('../pictures/GitHub.png')}
          height='61.25'
          width='70'>
        </img><span>kt13</span>
      </div>
      <div className='linkedin'>
        <img 
          src={linkedInImgUrl}
          height='61.25'
          width='70'>
        </img><span>kevintsang1</span>
      </div>
    </div>
  );
}