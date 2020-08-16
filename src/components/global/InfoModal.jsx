import React from 'react';
import {bool, string, number, array} from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import {Modal, Container, Row, Col, Badge} from 'react-bootstrap';

const InfoModal = ({
  show,
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  professions,
  friends,
}) => {
  let history = useHistory();

  const goBack = () => history.push('/');
  return (
    <Modal show={show} onHide={goBack} size="sm" animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className=" p-0">
        <Container>
          <Row>
            <Col>
              <img className="w-100 mb-2" src={thumbnail} alt={name} title={name} />
            </Col>
          </Row>
          <Row>
            <Col>Age:</Col>
            <Col> {age ? age : 'Unknown'}</Col>
          </Row>
          <Row>
            <Col>Weight:</Col>
            <Col> {weight ? weight : 'Unknown'}</Col>
          </Row>
          <Row>
            <Col>Height:</Col>
            <Col> {height ? height : 'Unknown'}</Col>
          </Row>
          <Row>
            <Col>Hair color:</Col>
            <Col> {hair_color}</Col>
          </Row>
          <Row className="border-top mt-2 pt-1">
            <Col>
              <span>Professions:</span>
            </Col>
          </Row>
          <Row className="pb-2">
            {professions.length ? (
              professions.map(profession => (
                <Col key={profession}>
                  <Badge pill variant="light">
                    {profession}
                  </Badge>
                </Col>
              ))
            ) : (
              <Badge pill variant="light">
                No professions
              </Badge>
            )}
          </Row>
          <Row className="border-top mt-2 pt-1">
            <Col>
              <span>Friends: </span>
            </Col>
          </Row>
          <Row className="pb-2">
            {friends.length ? (
              friends.map(friend => (
                <Col key={friend}>
                  <Link
                    to={{
                      pathname: '/',
                      search: `?name=${friend}`,
                    }}>
                    <Badge pill variant="primary">
                      {friend}
                    </Badge>
                  </Link>
                </Col>
              ))
            ) : (
              <Badge pill variant="light">
                No friends
              </Badge>
            )}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

InfoModal.propTypes = {
  show: bool.isRequired,
  id: number,
  name: string,
  thumbnail: string,
  age: number,
  weight: number,
  height: number,
  hair_color: string,
  professions: array,
  friends: array,
};

InfoModal.defaultProps = {
  show: false,
  name: 'Unknown',
  hair_color: 'Unknown',
  professions: [],
  friends: [],
};

export default InfoModal;
