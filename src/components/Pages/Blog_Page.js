import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Blog_Layout from './Blog_Components/Blog_Layout';

class Blog_Page extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Bounce right>
            <Blog_Layout />
            <section id='blog'>
              <h1>{}</h1>
              <h1 style={{ padding: 100 }}>{}</h1>
              <hr />
            </section>
          </Bounce>
        </div>
      </HashRouter>
    );
  }
}

export default Blog_Page;
