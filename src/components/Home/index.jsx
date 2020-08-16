import React, {useEffect, useContext} from 'react';
import qs from 'query-string';
import {Container, Row, Col} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from '../global/GnomeCard';
import SearchForm from './SearchForm';
import InfoModal from '../global/InfoModal';

const Home = () => {
  const location = useLocation();
  const {
    filteredGnomes,
    gnomeDetail,
    loadGnomesData,
    searchGnomeByName,
    findGnomeByName,
  } = useContext(GnomesContext);

  useEffect(() => {
    loadGnomesData();
  }, []);

  useEffect(() => {
    findGnomeByName(qs.parse(location.search)?.name ?? '');
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
      <InfoModal show={gnomeDetail !== null} {...gnomeDetail} />
    </Container>
  );
};

export default Home;
