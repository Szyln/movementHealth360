import React from 'react';
import PropTypes from 'prop-types';

function Alert({
  theme = 'primary', children, isBold = true, bgColorTheme = '', isSmall = false,
}) {
  return (
    <div className={`text-${theme} border-${theme} border-around rounded-sm 
     ${isBold ? 'border-lg' : 'fw-normal'}
    ${isSmall ? 'p-3 fs-h5' : 'p-4 fs-h4 mb-7'}
     ${bgColorTheme && `bg-${bgColorTheme}`}`}

    >
      {children}

    </div>
  );
}

Alert.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
  isBold: PropTypes.bool,
  bgColorTheme: PropTypes.string,
  isSmall: PropTypes.bool,

};
Alert.defaultProps = {
  theme: 'primary',
  isBold: true,
  bgColorTheme: '',
  isSmall: false,

};

export default Alert;
