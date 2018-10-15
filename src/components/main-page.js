import React from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import {connect} from 'react-redux';
import '../css/main-page.css';

export class MainPage extends React.Component{
  scrollToView (){
    if(this.props.projDir === true){
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      });
    }
    if(this.props.aboutDir){
      Element.scrollIntoView(<About/>);
    }
  }
  render(){
    return(
      <div className='main-page'>
        <About/>
        <Projects/>
        <Contact/>
        {this.scrollToView()}
      </div>);
  }
}

const mapStateToProps = (state) => ({
  projDir: state.header.projDir,
  aboutDir: state.header.aboutDir
});

export default connect(mapStateToProps)(MainPage);