import React from 'react';

function Alert({
  theme = 'primary', children, isBold = true, bgColorTheme = '', size = 'normal'
}) {
  return (
    <div className={`text-${theme} border-${theme} border-around rounded-sm 
     ${isBold ? 'border-lg' : 'fw-normal'}
    ${size === 'normal' ? ' p-4 fs-h4 mb-7' : size === 'sm' ? 'p-3 fs-h5' : '' }
    
     ${bgColorTheme && `bg-${bgColorTheme}`}`}
      
    >
      {children}

    </div>
  );
}

export default Alert;
