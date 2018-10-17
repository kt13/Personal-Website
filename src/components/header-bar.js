import React from 'react';
import {Link} from 'react-router-dom';
import {directToProjects} from '../actions/header-bar';
import {connect} from 'react-redux';
import Scroll from 'react-scroll-to-element';
import '../css/header-bar.css';

export class HeaderBar extends React.Component{

  render(){
    return(
    /* <div className='links'>
        <div><button onClick={this.props.dispatch()}>About</button></div>
        <div><button>Projects</button></div>
        <div><button>Contact Me</button></div>
        <div><Link to={'/projects'}>Projects</Link></div>
        <div><Link to={'/contact'}>Contact Me</Link></div> */
      /* </div> */
      <nav className='nav-box'>

        <ul className='ul-left'>

          <div className='nav-left'>

            <li className='about'>
              <Scroll type='id' element='about'>About</Scroll>
         
            </li>

            <li className='projects'>
              <Scroll type='id' element='projects' offset={-50}>
              Projects</Scroll>
             
         
            </li>
            
          </div>
        </ul>


        <div className='nav-right'>
          <ul className='ul-right'>
            <li className='contact'
              onClick={() => console.log('yes')}>
          Contact
            </li>
          </ul>
            
        </div>

        

      </nav>
    );
  }
}

export default connect()(HeaderBar);