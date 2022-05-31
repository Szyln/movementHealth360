import React from 'react';

const logoWordColor = '../logo-word-color.svg';
const logoWordWhite = '../logo-word-white.svg';

function LogoWordComponent({ isWhite = false, heightClass = "h-6 h-20" }) {
  return (
    <img src={isWhite ? logoWordWhite : logoWordColor} alt="logo of 動作健康 360" className={`${heightClass}`} />
  );
}

export default LogoWordComponent;
