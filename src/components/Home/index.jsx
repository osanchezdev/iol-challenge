import React, {Suspense, useEffect, useContext} from 'react';
import qs from 'query-string';
import Loader from '../global/Loader';
import {motion} from 'framer-motion';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import {GnomesContext} from '../../context/gnomesContext';

const LazyGnomeCardsList = React.lazy(() => import('../global/GnomeCardsList'));
const LazySearchForm = React.lazy(() => import('./SearchForm'));
const LazyInfoModal = React.lazy(() => import('../global/InfoModal'));

const titleVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
    },
  },
  hidden: {opacity: 0, scale: 0},
};
const Home = () => {
  const location = useLocation();
  let parsedSearch = qs.parse(location.search);
  const {loadGnomesData, findGnomeByName, filterGnomesByProfession} = useContext(GnomesContext);

  const applyFilters = () => {
    filterGnomesByProfession(parsedSearch?.profession ?? '');
    findGnomeByName(parsedSearch?.name ?? '');
  };
  useEffect(() => {
    loadGnomesData(parsedSearch.name, parsedSearch.profession);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [location]);

  return (
    <Container className="py-4 my-2">
      <Row>
        <Col>
          <motion.div animate="visible" initial="hidden" variants={titleVariants}>
            <h1>Brastlewark Searcher</h1>
          </motion.div>
          {parsedSearch.profession && (
            <div className="d-flex mb-2">
              <h4>(Filtered by profession = {parsedSearch.profession}) </h4>{' '}
              <Link
                to={{
                  pathname: '/',
                  search: '',
                }}>
                <Badge pill variant="light">
                  Reset filters
                </Badge>
              </Link>
            </div>
          )}
        </Col>
      </Row>
      <Suspense fallback={<Loader />}>
        <LazySearchForm />
        <LazyGnomeCardsList />
        <LazyInfoModal />
      </Suspense>
    </Container>
  );
};

export default Home;
