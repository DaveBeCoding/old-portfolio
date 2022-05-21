import React from 'react';
import styled from 'styled-components';
// import BModal from './BModal/BModal';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import BModal from './Blog_Modal';
import Post_01 from './Articles/Post_01';
import Post_02 from './Articles/Post_02';
import Post_03 from './Articles/Post_03';
import Post_04 from './Articles/Post_04';

import './tesstb.css';

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
`;

const Primary = styled.div`
  max-width: 650px;
  margin: 0 auto;
  font-family: 'Sen', sans-serif;
`;

const Blog_Layout = () => {
  return (
    <Wrap>
      <Primary>
        <Post_01 />
        <Post_02 />
        <Post_03 />
        <Post_04 />
      </Primary>
    </Wrap>
  );
};

export default Blog_Layout;

// stage for new branch
