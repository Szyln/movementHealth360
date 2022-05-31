import React from 'react';

function ViewportHeightContainer({
  children, bgColor = '', isFluid = false, container = true, fullHeight = true, otherClassName = ""
}) {
  return (
    <div
      className={`${fullHeight ? 'h-100vh' : 'py-10 py-md-20'} d-flex align-items-center bg-${bgColor} ${otherClassName}`}
    >
      <div className="w-100p">
        <div className={`${container ? '' : 'disable-'}container${isFluid ? '-fluid' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ViewportHeightContainer;
