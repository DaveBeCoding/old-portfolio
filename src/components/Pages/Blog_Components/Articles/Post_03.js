import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// const Wrap = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 1em;
// `;

// const Primary = styled.div`
//   max-width: 650px;
//   margin: 0 auto;
//   font-family: 'Sen', sans-serif;
// `;

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

const Post_03 = (props) => (
  <Block>
    <h1>Cyber Security Project</h1>
    <p>This is Project. It was started by Dave at Harvard.</p>
    <p>
      FaceBook is the creator of the framework used to build this website,
      React.
    </p>
    <div className='cls-modal'>{/* <BModal /> */}</div>
  </Block>
);

export default Post_03;
