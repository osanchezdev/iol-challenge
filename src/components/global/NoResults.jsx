import React from 'react';
import {Link} from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import {motion} from 'framer-motion';

import '../../styles/components/global/NoResults.scss';

const NoResults = () => {
  return (
    <motion.div
      className="no-results--wrapper"
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}>
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
    </motion.div>
  );
};

export default NoResults;
