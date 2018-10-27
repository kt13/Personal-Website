import React from 'react';
import Scroll from 'react-scroll-to-element';
import '../css/header-bar.css';

export class HeaderBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(
      <div>
        <nav className='nav-box-desktop'>

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
              <li className='resume'>
                <a 
                  href='https://drive.google.com/file/d/1b9cAlkp-G8aBn2Jqi0zHeLSeC0cyrnsB/view?ths=true'
                  target='_blank'
                  rel='noopener noreferrer'>Resume</a>
              </li>
              <li className='contact'>
                <Scroll type='id' element='contact'>Contact Me</Scroll>
              </li>
            </ul>

          </div>

        </nav>
        <nav className='nav-box-mobile'>
          <div className="dropdown">
            <div className='light'>
              <button className="dropbtn" onClick={() => {}}>Menu</button>
            </div>
            <div className="dropdown-content">
              <div className='dropdown-link'><Scroll type='id' element='about' offset={-50}>About</Scroll></div>
              <div className='dropdown-link'><Scroll type='id' element='projects' offset={-50}>Projects</Scroll></div>
              <a 
                href='https://drive.google.com/file/d/1b9cAlkp-G8aBn2Jqi0zHeLSeC0cyrnsB/view?ths=true'
                target='_blank'
                rel='noopener noreferrer'>Resume</a>
              <div className='dropdown-link'><Scroll type='id' element='contact'>Contact Me</Scroll></div>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderBar;