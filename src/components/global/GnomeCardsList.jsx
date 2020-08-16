import React, {Suspense, useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from './GnomeCard';
import Loader from './Loader';

const LazyNoResults = React.lazy(() => import('./NoResults'));

const GnomeCardsList = () => {
  const {filteredGnomes} = useContext(GnomesContext);
  return (
    <Suspense fallback={<Loader />}>
      <Row>
        {filteredGnomes ? (
          filteredGnomes.length ? (
            filteredGnomes.map(gnome => (
              <Col key={gnome.id} xs={6} sm={6} xl={3} md={3}>
                <GnomeCard {...gnome} />
              </Col>
            ))
          ) : (
            <LazyNoResults />
          )
        ) : (
          <Loader />
        )}
      </Row>
    </Suspense>
  );
};

export default GnomeCardsList;
