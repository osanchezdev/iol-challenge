import React, {useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from './GnomeCard';
import Loader from './Loader';

const GnomeCardsList = () => {
  const {filteredGnomes} = useContext(GnomesContext);
  return (
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
  );
};

export default GnomeCardsList;
