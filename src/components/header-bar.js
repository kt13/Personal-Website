import React from 'react';
import {Link} from 'react-router-dom';


export default class HeaderBar extends React.Component{

  render(){
    return(
      <div className='links'>
        <div><Link to={'/about'}>About</Link></div>
        <div><Link to={'/projects'}>Projects</Link></div>
        <div><Link to={'/contact'}>Contact Me</Link></div>
      </div>
    );
  }
}