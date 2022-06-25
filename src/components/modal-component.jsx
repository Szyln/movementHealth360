import React from 'react';
import PropTypes from 'prop-types';

function Modal({ children }) {
  return (
    <div className="backdrop">
      <div className="position-fixed top-50 left-50 translate-middle z-3000 w-95p w-sm-80p w-md-80p w-lg-80p max-w-lg-breakpoint-xl max-h-95p h-95p d-flex align-items-center justify-content-center">
        { children }
      </div>
    </div>
  );
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Modal;
