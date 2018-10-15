import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import MainPage from './main-page';
import About from './about';
import Projects from './projects';
import HeaderBar from './header-bar';
import Contact from './contact';
import logo from './logo.svg';
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
    );
  }
}

export default withRouter(App);
