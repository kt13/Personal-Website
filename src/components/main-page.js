import React from 'react';
import About from './about';
// import Projects from './projects';
import Contact from './contact';
import {connect} from 'react-redux';
import '../css/main-page.css';
import {Link} from 'react-router-dom';
import {directToProjects} from '../actions/header-bar';
import Scroll from 'react-scroll-to-element';
import '../css/header-bar.css';

export class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }
  scrollToView (){
    // if(this.props.projDir === true){
    //   window.scrollTo({
    //     top: 500,
    //     behavior: 'smooth'
    //   });
    // }
    // if(this.props.aboutDir){
    //   Element.scrollIntoView(<About/>);
    // }
    // if(this.props.projDir === true){
    //   window.scrollTo(0, 500);
    // }
  }

  render(){
    return(
      <div>
        {/*  <div className='links'>
          <div><button onClick={this.props.dispatch()}>About</button></div>
          <div><button>Projects</button></div>
          <div><button>Contact Me</button></div>
          <div><Link to={'/projects'}>Projects</Link></div>
          <div><Link to={'/contact'}>Contact Me</Link></div>
     </div> */}
        <nav>

          <ul className="clearfix">

            <div className='nav-left'>

              <li className='about'
                onClick={() => this.props.dispatch(directToProjects())}>
                <Scroll type='id' element='about'>About</Scroll>
         
              </li>

              <li className='projects'
                onClick={() => this.props.dispatch(directToProjects())}>
                <Scroll type='id' element='projects' offset={-50}>Projects</Scroll>
             
         
              </li>

            </div>

            <div className='nav-right'>
              <li className='contact'
                onClick={() => console.log('yes')}>
          Contact
              </li>
            </div>

          </ul>

        </nav>
        <div className='main-page'>
          <About  id='about'/>
          <div className='projects' id='projects'>
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>  
            <h2>Project 2</h2>  
            <p>Filler Text2</p>  
            <h2>Project 3</h2>  
            <p>Filler Text3</p>    
            <h2>Project 1</h2>  
            <p>Filler Text1</p>    
          </div>
          <Contact id='contact'/>
          {this.scrollToView()}
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