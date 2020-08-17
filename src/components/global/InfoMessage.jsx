import React from 'react';
import {string, bool} from 'prop-types';
import {motion} from 'framer-motion';

import '../../styles/components/global/InfoMessage.scss';
import ResetFiltersBadge from './ResetFiltersBadge';
import ReloadPageButton from './ReloadPageButton';

const InfoMessage = ({emoji, message, badgeLink, reloadButton}) => {
  return (
    <motion.div
      className="info-message--wrapper"
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}>
      {emoji && (
        <div className="info-message--emoji">
          <span>{emoji}</span>
        </div>
      )}
      <h5 className="no-result--text">{message}</h5>
      {badgeLink && (
        <div className="info-message--link">
          <ResetFiltersBadge />
        </div>
      )}
      {reloadButton && (
        <div className="info-message--reload">
          <ReloadPageButton />
        </div>
      )}
    </motion.div>
  );
};

InfoMessage.propTypes = {
  emoji: string.isRequired,
  message: string.isRequired,
  badgeLink: bool,
  reloadButton: bool,
};

InfoMessage.defaultProps = {
  emoji: '&#9996;',
  message: 'Hi there!',
};

export default InfoMessage;
