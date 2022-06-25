import React from 'react';
import PropTypes from 'prop-types';

function HomepageSectionImgComponent({ img, imgAlt = '', otherClass = '' }) {
  return (
    <div className={`w-100p w-lg-20vw h-lg-30vh d-flex align-items-center mx-auto ${otherClass}`}>
      <img src={img} alt={imgAlt} className="img w-100p h-100p" />
    </div>
  );
}
HomepageSectionImgComponent.propTypes = {

  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  otherClass: PropTypes.string,

};

HomepageSectionImgComponent.defaultProps = {
  otherClass: '',
};
export default HomepageSectionImgComponent;
