import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Post_Styles.css';

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

const Post_01 = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Block>
        <h1>Stock trading Project</h1>
        <p>This is Project. It's a search engine started by Dave and Dave.</p>
        <p>
          PageRank is the search algorithm that started it all. Today it's a
          multibillion dollar company.
        </p>

        {/* Modal button */}

        <Button
          variant='primary'
          // className='class-open-btn text-center'
          onClick={handleShow}
        >
          View
        </Button>

        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Post_01</h1>
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
            <Button
              variant='primary'
              className='cls-modal'
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Block>
    </>
  );
};

export default Post_01;
