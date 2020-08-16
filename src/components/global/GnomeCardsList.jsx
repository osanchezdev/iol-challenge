import React, {useContext} from 'react';
import loadable from '@loadable/component';
import {Row, Col} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from './GnomeCard';
import Loader from './Loader';

const LazyNoResults = loadable(() => import('./NoResults'));

const GnomeCardsList = () => {
  const {filteredGnomes} = useContext(GnomesContext);
  return (
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
  );
};

export default GnomeCardsList;
