import React from 'react';
import {string, number} from 'prop-types';
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import '../../styles/components/global/GnomeCard.scss';

const GnomeCard = ({id, name, thumbnail}) => {
  return (
    <Link
      id={id}
      to={{
        pathname: '/',
        search: `?name=${name}`,
      }}>
      <div className="gnome-card--wrapper">
        <div className="gnome-card--image-wrapper">
          <LazyLoadImage alt={name} title={name} height={168} src={thumbnail} width={'100%'} />
        </div>
        <div className="gnome-card--title">
          <p>{name} </p>
        </div>
      </div>
    </Link>
  );
};

GnomeCard.propTypes = {
  id: number,
  name: string,
  thumbnail: string,
};

GnomeCard.defaultProps = {
  name: 'Unknown',
};

export default GnomeCard;
