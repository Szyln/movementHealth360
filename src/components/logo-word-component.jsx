import React from 'react';

const logoWordColor = '../../src/img/logo-word-color.svg';
const logoWordWhite = '../../src/img/logo-word-white.svg';

function LogoWordComponent({ isWhite = false, heightClass = "h-6 h-20" }) {
  return (
    <img src={isWhite ? logoWordWhite : logoWordColor} alt="logo of 動作健康 360" className={`${heightClass}`} />
  );
}

export default LogoWordComponent;
