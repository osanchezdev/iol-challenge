import React from 'react';
import {Link} from 'react-router-dom';
import {Badge} from 'react-bootstrap';

import '../../styles/components/global/NoResults.scss';

const NoResults = () => {
  return (
    <div className="no-results--wrapper">
      <div className="no-results--emoji">
        <span>&#128533;</span>
      </div>
      <h5 className="no-result--text">No results, try searching something else</h5>
      <div className="no-results--link">
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
    </div>
  );
};

export default NoResults;
