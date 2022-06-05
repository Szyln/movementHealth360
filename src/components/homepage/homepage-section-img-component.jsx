import React from 'react';

function HomepageSectionImgComponent({ img, imgAlt = '', otherClass = '' }) {
  return (
    <div className={`w-100p w-lg-20vw h-lg-30vh d-flex align-items-center mx-auto ${otherClass}`}>
      <img src={img} alt={imgAlt} className="img w-100p h-100p" />
    </div>
  );
}

export default HomepageSectionImgComponent;
