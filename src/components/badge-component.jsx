import React from 'react';
import PropTypes from 'prop-types';

function Badge({
  children, theme = 'primary', fontSize = 'h4', isOutline = false, textColor = 'primary-dark',
}) {
  return (
    <div className={`d-inline-block 
    ${isOutline ? `border-around border-${theme}` : `bg-${theme}`} 
    text-${textColor} 
    rounded-circle px-4 py-1 fw-normal me-2 mb-2
    fs-${fontSize - 1}
    fs-lg-${fontSize}`}
    >
      {children}
    </div>
  );
}
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  fontSize: PropTypes.string,
  isOutline: PropTypes.bool,
  textColor: PropTypes.string,

};
Badge.defaultProps = {
  theme: 'primary',
  fontSize: 'h4',
  textColor: 'primary-dark',
  isOutline: false,
};

export default Badge;
