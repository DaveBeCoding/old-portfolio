import React, {useState} from "react";
// import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";
import { Button } from 'react-bootstrap';
import "./tesstb.css"



const BModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                View
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!Woohoo, 
                you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!Woohoo, 
                you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!Woohoo, 
                you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!Woohoo, 
                you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!Woohoo, 
                you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal!Woohoo, 
                you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                Woohoo, you're reading this text in a modal! Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="cls-modal" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BModal;
