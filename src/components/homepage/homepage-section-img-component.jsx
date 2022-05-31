import React from 'react';

function HomepageSectionImgComponent({ img, imgAlt = '', otherClass = '' }) {
  return (
    <div className={`w-100p w-md-20vw h-md-30vh d-flex align-items-center ${otherClass}`}>
      <img src={img} alt={imgAlt} className="img w-100p h-100p" />
    </div>
  );
}

export default HomepageSectionImgComponent;
