import React, {useEffect, useContext} from 'react';
import qs from 'query-string';
import {Container, Row, Col} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from '../global/GnomeCard';
import SearchForm from './SearchForm';
import InfoModal from '../global/InfoModal';
import Loader from '../global/Loader';

const Home = () => {
  const location = useLocation();
  let parsedSearch = qs.parse(location.search);
  const {
    filteredGnomes,
    gnomeDetail,
    loadGnomesData,
    searchGnomeByName,
    findGnomeByName,
    filterGnomesByProfession,
  } = useContext(GnomesContext);

  useEffect(() => {
    loadGnomesData();
  }, []);

  useEffect(() => {
    if (parsedSearch.profession) filterGnomesByProfession(parsedSearch.profession);
    findGnomeByName(parsedSearch?.name ?? '');
  }, [location]);

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1>Brastlewark Searcher</h1>
          {parsedSearch.profession && (
            <h4>(Filtered by profession = {parsedSearch.profession}) </h4>
          )}
        </Col>
      </Row>
      <SearchForm searchGnomeByName={searchGnomeByName} loading={!filteredGnomes} />
      <Row>
        {filteredGnomes ? (
          filteredGnomes.map(gnome => (
            <Col key={gnome.id} xs={6} sm={6} xl={3} md={3}>
              <GnomeCard {...gnome} />
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>
      <InfoModal show={gnomeDetail !== null} {...gnomeDetail} />
    </Container>
  );
};

export default Home;
