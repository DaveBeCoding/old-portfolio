import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 185;
  padding: 30px;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

const Post_02 = (props) => (
  <Block>
    <h1>Drone Project</h1>
    <p>This is Project. It started off as an online bookstore.</p>
    <p>Dave is the owner of AWS, the host this tutorial is targeting.</p>
    <div className='cls-modal'>{/* <BModal /> */}</div>
  </Block>
);

export default Post_02;
