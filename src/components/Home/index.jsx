import React, {useEffect, useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from '../global/GnomeCard';
import SearchForm from './SearchForm';

const Home = () => {
  const {brastlewarkGnomes, filteredGnomes, loadGnomesData, searchGnomeByName} = useContext(
    GnomesContext,
  );

  useEffect(() => {
    loadGnomesData();
  }, []);

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1>Brastlewark Searcher</h1>
        </Col>
      </Row>
      <SearchForm searchGnomeByName={searchGnomeByName} />
      <Row>
        {filteredGnomes &&
          filteredGnomes.map(gnome => (
            <Col key={gnome.id} xs={6} sm={6} xl={3} md={3}>
              <GnomeCard {...gnome} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
