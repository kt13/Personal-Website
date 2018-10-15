import React from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default function MainPage (props){
  return(
    <div>
      <About/>
      <Projects/>
      <Contact/>
    </div>)
  ;
}