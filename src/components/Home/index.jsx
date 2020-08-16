import React, {useEffect, useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from '../global/GnomeCard';
import SearchForm from './SearchForm';
import InfoModal from '../global/InfoModal';

const Home = () => {
  const location = useLocation();
  const {filteredGnomes, loadGnomesData, searchGnomeByName} = useContext(GnomesContext);

  useEffect(() => {
    loadGnomesData();
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

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
      <InfoModal show={location.search !== ''} />
    </Container>
  );
};

export default Home;
