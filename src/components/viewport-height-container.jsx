import React from 'react';
import PropTypes from 'prop-types';

function ViewportHeightContainer({
  children, bgColor = '', isFluid = false, isContainer = true, isFullHeight = true, otherClassName = '', isHidden = false,
}) {
  if (isHidden) {
    return null;
  } if (!isHidden) {
    return (
      <div
        className={`${isFullHeight ? 'h-100vh' : 'py-10 py-md-20'} d-flex align-items-center bg-${bgColor} ${otherClassName}`}
      >
        <div className="w-100p">
          <div className={`${isContainer ? '' : 'disable-'}container${isFluid ? '-fluid' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

ViewportHeightContainer.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  isFluid: PropTypes.bool,
  isFullHeight: PropTypes.bool,
  isContainer: PropTypes.bool,
  isHidden: PropTypes.bool,
  otherClassName: PropTypes.string,

};
ViewportHeightContainer.defaultProps = {
  bgColor: '',
  otherClassName: '',
  isFluid: false,
  isContainer: true,
  isFullHeight: true,
  isHidden: false,
};

export default ViewportHeightContainer;
