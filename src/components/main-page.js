import React from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import {connect} from 'react-redux';
import '../css/main-page.css';
// import {Link} from 'react-router-dom';
// import {directToProjects} from '../actions/header-bar';
// import Scroll from 'react-scroll-to-element';
// import '../css/header-bar.css';


//tasks to do tonight:
//projects part done
//about me info done
//add in icons for things you know
//more css
//publish to heroku at least


export class MainPage extends React.Component{
  

  render(){
    const h1First = 'Kevin Tsang = {';
    const h1Second = '};';
    const logoStacks1 = ' title: Full-Stack Developer,';
    const logoStacks2 = 'technologies: [MongoDB, Express, React, NodeJS, Postgres QL, Python]';
    return(
      <div>
        {/*  <div className='links'>
          <div><button onClick={this.props.dispatch()}>About</button></div>
          <div><button>Projects</button></div>
          <div><button>Contact Me</button></div>
          <div><Link to={'/projects'}>Projects</Link></div>
          <div><Link to={'/contact'}>Contact Me</Link></div>
     </div> */}
        {/* <nav>

          <ul className="clearfix">

            <div className='nav-left'>

              <li className='about'>
                <Scroll type='id' element='about'>About</Scroll>
              </li>

              <li className='projects'>
                <Scroll type='id' element='projects' offset={-50}>Projects
                </Scroll>
              </li>

            </div>

            <div className='nav-right'>
              <li className='contact'>
          Contact
              </li>
            </div>

          </ul>

        </nav> */}
        <div className='main-page'>
          <div className='header-title'>
            <h1 className='h1-main-page-first'>{h1First}</h1>
            <h2 className='h2-first'>{logoStacks1}</h2>
            <h2 className='h2-second'>{logoStacks2}</h2>
            <h1 className='h1-main-page-second'>{h1Second}</h1>
            {/* <h3>Full-Stack Developer</h3> */}
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

const mapStateToProps = (state) => ({
  projDir: state.header.projDir,
  aboutDir: state.header.aboutDir
});

export default connect(mapStateToProps)(MainPage);