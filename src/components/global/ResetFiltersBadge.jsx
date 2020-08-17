import React from 'react';
import {Link} from 'react-router-dom';
import {Badge} from 'react-bootstrap';

const ResetFiltersBadge = () => {
  return (
    <Link
      to={{
        pathname: '/',
        search: '',
      }}>
      <Badge pill variant="light">
        Reset filters
      </Badge>
    </Link>
  );
};

export default ResetFiltersBadge;
