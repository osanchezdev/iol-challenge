import React from 'react';
import {Spinner} from 'react-bootstrap';

import '../../styles/components/global/Loader.scss';

const Loader = () => {
  return (
    <div className="loader--wrapper">
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default Loader;
