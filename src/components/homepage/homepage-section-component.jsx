import React from 'react';
import PropTypes from 'prop-types';

function HomepageSectionComponent({ children }) {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
      {children}
    </div>
  );
}
HomepageSectionComponent.propTypes = {
  children: PropTypes.node.isRequired,

};
export default HomepageSectionComponent;
