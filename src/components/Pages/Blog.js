import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import TestB from './bcomponents/TestB';

class Blog extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <TestB />
          {/* <ul className="header">
              <li>
                <NavLink exact to="/">
                  Blog 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog 2</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Blog 3</NavLink>
              </li>
              <TestB/>
            </ul> */}
          <Bounce right>
            <section id='blog'>
              <h2>Blog</h2>
              <h1>{}</h1>
              <p>
                <strong>Coming Soon!</strong>
                <hr />
              </p>
            </section>
          </Bounce>
        </div>
      </HashRouter>
    );
  }
}

export default Blog;

// stage for new branch
