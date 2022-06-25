// the button which navigate to other page (that doesn't appear on homepage)

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigateLinkButtonComponent({
  linkTo, children, isWhite = false, isAlignEnd = false,
}) {
  return (
    <div className="mb-4 mb-lg-0">
      <Link className={`navigate-link-button text-accent d-flex align-items-center ${isAlignEnd && 'justify-content-end'} fs-h4 py-4 ${isWhite && 'text-white'} hover hover-navigate-link hover-expand-round hover-animation-start`} to={linkTo}>

        <span className="me-3">
          {children}
        </span>

        <svg width="58" height="16" viewBox="0 0 58 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.7071 8.70711C58.0976 8.31658 58.0976 7.68342 57.7071 7.29289L51.3431 0.928932C50.9526 0.538408 50.3195 0.538408 49.9289 0.928932C49.5384 1.31946 49.5384 1.95262 49.9289 2.34315L55.5858 8L49.9289 13.6569C49.5384 14.0474 49.5384 14.6805 49.9289 15.0711C50.3195 15.4616 50.9526 15.4616 51.3431 15.0711L57.7071 8.70711ZM0 9H57V7H0V9Z" fill={isWhite ? '#fff' : '#F29438'} />
        </svg>

      </Link>
    </div>
  );
}
NavigateLinkButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  isWhite: PropTypes.bool,
  isAlignEnd: PropTypes.bool,

};
NavigateLinkButtonComponent.defaultProps = {
  isWhite: false,
  isAlignEnd: false,
};

export default NavigateLinkButtonComponent;
