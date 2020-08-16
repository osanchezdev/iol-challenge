import React from 'react';
import {string} from 'prop-types';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import '../../styles/components/global/GnomeCard.scss';

const GnomeCard = ({name, thumbnail}) => {
  return (
    <div className="gnome-card--wrapper">
      <div className="gnome-card--image-wrapper">
        <LazyLoadImage alt={name} title={name} height={168} src={thumbnail} width={'100%'} />
      </div>
      <div className="gnome-card--title">
        <p>{name} </p>
      </div>
    </div>
  );
};

GnomeCard.propTypes = {
  name: string,
  thumbnail: string,
};

GnomeCard.defaultProps = {
  name: 'Unknown',
};

export default GnomeCard;
