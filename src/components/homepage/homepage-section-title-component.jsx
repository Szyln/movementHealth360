import React from 'react';
import PropTypes from 'prop-types';

function HomepageSectionTitleComponent({ children, textColor = 'primary' }) {
  return (
    <h2 className={`text-${textColor} fs-h4  fs-lg-h3 fs-lg-h2 mb-1 mb-lg-0`}>
      {children}
    </h2>
  );
}
HomepageSectionTitleComponent.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,

};

HomepageSectionTitleComponent.defaultProps = {
  textColor: 'primary',

};
export default HomepageSectionTitleComponent;
