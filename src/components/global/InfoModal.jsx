import React, {useContext} from 'react';
import _ from 'lodash';
import {Link, useHistory} from 'react-router-dom';
import {Modal, Container, Row, Col, Badge} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';

const InfoModal = () => {
  const {gnomeDetail} = useContext(GnomesContext);
  let history = useHistory();

  const goBack = () => history.push('/');
  return (
    <>
      {!_.isEmpty(gnomeDetail) ? (
        <Modal show={true} onHide={goBack} size="sm" centered>
          <Modal.Header closeButton>
            <Modal.Title>{gnomeDetail.name || 'Unknown'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className=" p-0">
            <Container>
              <Row>
                <Col>
                  <img className="w-100 mb-2" src={gnomeDetail.thumbnail} alt={name} title={name} />
                </Col>
              </Row>
              <Row>
                <Col>Age:</Col>
                <Col> {gnomeDetail.age || 'Unknown'}</Col>
              </Row>
              <Row>
                <Col>Weight:</Col>
                <Col> {gnomeDetail.weight || 'Unknown'}</Col>
              </Row>
              <Row>
                <Col>Height:</Col>
                <Col> {gnomeDetail.height || 'Unknown'}</Col>
              </Row>
              <Row>
                <Col>Hair color:</Col>
                <Col> {gnomeDetail.hair_color || 'Unknown'}</Col>
              </Row>
              <Row className="border-top mt-2 pt-1">
                <Col>
                  <span>Professions:</span>
                </Col>
              </Row>
              <Row className="pb-2">
                {gnomeDetail.professions.length ? (
                  gnomeDetail.professions.map(profession => (
                    <Col key={profession}>
                      <Link
                        to={{
                          pathname: '/',
                          search: `?profession=${profession}`,
                        }}>
                        <Badge pill variant="light">
                          {profession}
                        </Badge>
                      </Link>
                    </Col>
                  ))
                ) : (
                  <Badge pill variant="light" className="mx-3">
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
                {gnomeDetail.friends.length ? (
                  gnomeDetail.friends.map(friend => (
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
                  <Badge pill variant="light" className="mx-3">
                    No friends
                  </Badge>
                )}
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
};

export default InfoModal;
