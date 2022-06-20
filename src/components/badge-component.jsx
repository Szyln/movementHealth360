import React from 'react';

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

export default Badge;
