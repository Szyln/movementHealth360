import React from 'react';

function HomepageSectionImgComponent({ img, imgAlt = '' }) {
  return (
    <div className="w-100p  w-md-30vw">
      <img src={img} alt={imgAlt} />
    </div>
  );
}

export default HomepageSectionImgComponent;
