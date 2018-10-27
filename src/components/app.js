import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import MainPage from './main-page';
import HeaderBar from './header-bar';
import Contact from './contact';
import '../css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/contact' component={Contact}/>
      </div>
    );
  }
}

export default withRouter(App);
