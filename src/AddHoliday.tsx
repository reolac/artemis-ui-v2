import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddHoliday = ({ show, handleClose }: { show: boolean; handleClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
);

export default AddHoliday;
