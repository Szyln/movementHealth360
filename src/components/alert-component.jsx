import React from 'react';

function Alert({
  theme = 'primary', children, isBold = true, bgColorTheme = '', size = 'normal'
}) {
  return (
    <div className={`text-${theme} border-${theme} border-around rounded-sm mb-7
     ${isBold ? 'border-lg' : 'fw-normal'}
    ${size === 'normal' ? ' p-4 fs-h4' : size === 'sm' ? 'p-3 fs-h4' : '' }
    
     ${bgColorTheme && `bg-${bgColorTheme}`}`}
      
    >
      {children}

    </div>
  );
}

export default Alert;
