import React from 'react';

function HomepageSectionComponent({ children }) {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
      {children}
    </div>
  );
}

export default HomepageSectionComponent;
