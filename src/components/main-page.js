import React from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import '../css/main-page.css';

export default function MainPage (props){
  return(
    <div className='main-page'>
      <About/>
      <Projects/>
      <Contact/>
    </div>)
  ;
}