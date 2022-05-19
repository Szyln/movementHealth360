import React from 'react';
import PageTitleComponent from './page-title-component';

function PageContainerComponent({ children, title }) {
  return (
    <div className="container mb-30">
      <PageTitleComponent title={title} />
      {children}
    </div>
  );
}

export default PageContainerComponent;
