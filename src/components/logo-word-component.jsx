import React from 'react';
import PropTypes from 'prop-types';

const logoWordColor = '../logo-word-color.svg';
const logoWordWhite = '../logo-word-white.svg';

function LogoWordComponent({ isWhite = false, heightClass = 'h-6 h-20' }) {
  return (
    <img src={isWhite ? logoWordWhite : logoWordColor} alt="logo of 動作健康 360" className={`${heightClass}`} />
  );
}

LogoWordComponent.propTypes = {
  heightClass: PropTypes.string,
  isWhite: PropTypes.bool,
};
LogoWordComponent.defaultProps = {
  heightClass: 'h-6 h-20',
  isWhite: false,
};

export default LogoWordComponent;
