import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

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

const Post_02 = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Block>
      <h1>Drone Project</h1>
      <p>This is Project. It started off as an online bookstore.</p>
      <p>Dave is the owner of AWS, the host this tutorial is targeting.</p>

      <Button variant='primary' onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Post_02</h1>
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal!Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal! Woohoo, you're reading
          this text in a modal! Woohoo, you're reading this text in a
          modal!Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal!Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal!Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal!Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal! Woohoo, you're reading this text in a modal! Woohoo, you're
          reading this text in a modal! Woohoo, you're reading this text in a
          modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' className='cls-modal' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Block>
  );
};

export default Post_02;
