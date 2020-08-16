import React, {useEffect, useContext} from 'react';
import loadable from '@loadable/component';
import qs from 'query-string';
import {Container, Row, Col} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import {GnomesContext} from '../../context/gnomesContext';
import InfoModal from '../global/InfoModal';

const LazyGnomeCardsList = loadable(() => import('../global/GnomeCardsList'));
const LazySearchForm = loadable(() => import('./SearchForm'));

const Home = () => {
  const location = useLocation();
  let parsedSearch = qs.parse(location.search);
  const {gnomeDetail, loadGnomesData, findGnomeByName, filterGnomesByProfession} = useContext(
    GnomesContext,
  );

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
      <LazySearchForm />
      <LazyGnomeCardsList />
      <InfoModal show={gnomeDetail !== null} {...gnomeDetail} />
    </Container>
  );
};

export default Home;
