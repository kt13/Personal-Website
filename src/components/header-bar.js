import React from 'react';
import {Link} from 'react-router-dom';
import {directToProjects} from '../actions/header-bar';
import {connect} from 'react-redux';

export class HeaderBar extends React.Component{

  render(){
    return(
      <div className='links'>
        <div><button /* onClick={this.props.dispatch()} */>About</button></div>
        <div><button onClick={() => this.props.dispatch(directToProjects())}>Projects</button></div>
        <div><button>Contact Me</button></div>
        {/* <div><Link to={'/projects'}>Projects</Link></div>
        <div><Link to={'/contact'}>Contact Me</Link></div> */}
      </div>
    );
  }
}

export default connect()(HeaderBar);