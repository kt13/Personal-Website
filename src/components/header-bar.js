import React from 'react';
import {Link} from 'react-router-dom';
import {directToProjects} from '../actions/header-bar';
import {connect} from 'react-redux';
import Scroll from 'react-scroll-to-element';
import '../css/header-bar.css';

export class HeaderBar extends React.Component{

  render(){
    return(
      <div>

      </div>
    );
  }
}

export default connect()(HeaderBar);