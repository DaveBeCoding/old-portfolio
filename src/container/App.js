import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from '../components/Pages/Home';
import Blog from '../components/Pages/Blog_Page';
import Contact from '../components/Pages/Contact';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import LightSpeed from 'react-reveal/LightSpeed';

class App extends Component {
  state = {
    headerName: 'Welcome to the site',
    jobtitle: 'Software Engineer',
    gitLink: 'https://github.com/davebecoding',
    twitterLink: 'https://twitter.com/cryptomontana01',
    linkedInLink: 'https://www.linkedin.com/in/david-johnson-382534230/',
  };

  // ************************
  render() {
    const { gitLink, twitterLink, linkedInLink } = this.state;
    return (
      <HashRouter>
        <div>
          <LightSpeed right>
            <ul className='header'>
              <li>
                <NavLink exact to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/blog'>Blog</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </LightSpeed>

          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
          </div>
          <LightSpeed right>
            <ul className='footer'>
              <li>
                <a href={gitLink} rel='noopener noreferrer' target='_blank'>
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href={twitterLink} rel='noopener noreferrer' target='_blank'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href={linkedInLink}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FaLinkedinIn />
                </a>
                <NavLink to='/linkedin'></NavLink>
              </li>
            </ul>
          </LightSpeed>
        </div>
      </HashRouter>
    );
  }
}

export default App;
