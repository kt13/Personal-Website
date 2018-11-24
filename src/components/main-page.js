import React from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import '../css/main-page.css';

export class MainPage extends React.Component{

  render(){
    const h1First = 'Kevin Tsang = {';
    const h1Second = '};';
    const logoStacks1 = ' title: Full-Stack Developer,';
    const logoStacks2 = 'technologies: [MongoDB, Express, React, Redux, Node.js, PostgreSQL, Python, Travis CI, Mocha/Chai, Enzyme/Jest, Git, GitHub]';
    return(
      <div>
        <div className='main-page'>
          <div className='header-title'>
            <h1 className='h1-main-page-first'>{h1First}</h1>
            <h2 className='h2-1'>{logoStacks1}</h2>
            <h2 className='h2-2'>{logoStacks2}</h2><span></span>
            <h1 className='h1-main-page-second'>{h1Second}</h1>
          </div>
          <h2 className='h2-main-page'>About Me</h2>
          <About />
          <h2 className='h2-main-page'>Projects</h2>
          <Projects />
          <h2 className='h2-main-page'>Contacts</h2>
          <Contact />
        </div>
      </div>
    );
  }
}

export default MainPage;