import React from 'react';
import {string, number} from 'prop-types';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import '../../styles/components/global/GnomeCard.scss';

const cardVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.15,
    },
  },
  hidden: {opacity: 0},
};
const GnomeCard = ({id, name, thumbnail}) => {
  return (
    <motion.div animate="visible" initial="hidden" variants={cardVariants}>
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
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </motion.div>
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
