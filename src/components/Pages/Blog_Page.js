import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import TestB from './Blog_Components/TestB';

class Blog_Page extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Bounce right>
            <TestB example='prop test' />
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
            <section id='blog'>
              {/* <h2>Blog</h2> */}
              {/* <h1style={{ color: 'blue', lineHeight : 10, padding: 20 }>{}</h1> */}
              <h1>{}</h1>
              <h1>{}</h1>

              {/* <p> */}
              {/* <strong>Coming Soon!</strong> */}
              <hr />
              {/* </p> */}
            </section>
          </Bounce>
        </div>
      </HashRouter>
    );
  }
}

export default Blog_Page;

// stage for new branch
