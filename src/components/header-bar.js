import React from 'react';
import {Link} from 'react-router-dom';
import {directToProjects} from '../actions/header-bar';
import {connect} from 'react-redux';
import Scroll from 'react-scroll-to-element';
import '../css/header-bar.css';

export class HeaderBar extends React.Component{

  render(){
    return(
      <nav className='nav-box'>

        <ul className='ul-left'>

          <div className='nav-left'>
            <li className='about'>
              <Scroll type='id' element='about' offset={-50}>About</Scroll>
            </li>

            <li className='projects'>
              <Scroll type='id' element='projects' offset={-50}>
              Projects</Scroll>
            </li>
            
          </div>
        </ul>

        <div className='nav-right'>

          <ul className='ul-right'>
            <li className='contact'>
              <Scroll type='id' element='contact'>Contact</Scroll>
            </li>
          </ul>

        </div>

      </nav>
    );
  }
}

export default connect()(HeaderBar);