import React from 'react';
import {string} from 'prop-types';
import '../../styles/components/global/GnomeCard.scss';

const GnomeCard = ({name, thumbnail}) => {
  return (
    <div className="gnome-card--wrapper">
      <div className="gnome-card--image-wrapper">
        <img src={thumbnail} alt={name} title={name} className="gnome-card--image" />
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
