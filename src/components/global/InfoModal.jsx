import React from 'react';
import {bool} from 'prop-types';
import {useHistory} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

const InfoModal = ({show}) => {
  let history = useHistory();

  const goBack = () => history.push('/');
  return (
    <div>
      <Modal show={show} onHide={goBack}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </div>
  );
};

InfoModal.propTypes = {
  show: bool.isRequired,
};

export default InfoModal;
