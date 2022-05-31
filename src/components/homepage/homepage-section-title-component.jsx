import React from 'react';
import NavigateLinkButtonComponent from '../navigate-link-button-component';

function HomepageSectionTitleComponent({ children, textColor = 'text-primary' }) {
  return (
    <h2 className={`${textColor} fs-h4  fs-lg-h3 fs-lg-h2 mb-1 mb-lg-0`}>
      {children}
    </h2>
  );
}

export default HomepageSectionTitleComponent;
