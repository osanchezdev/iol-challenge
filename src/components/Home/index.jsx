import React, {useEffect, useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from '../global/GnomeCard';

const Home = () => {
  const {brastlewarkGnomes, loadGnomesData} = useContext(GnomesContext);

  useEffect(() => {
    loadGnomesData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>Header / Searcher</Col>
      </Row>
      <Row>
        <Col>
          <Col>More filters</Col>
        </Col>
      </Row>
      <Row>
        {console.log(brastlewarkGnomes)}
        {brastlewarkGnomes &&
          brastlewarkGnomes.map(gnome => (
            <Col key={gnome.id} xs={6} sm={6} xl={3} md={3}>
              <GnomeCard {...gnome} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
