import React from 'react';
import PageTitleComponent from './page-title-component';

function PageContainerComponent({
  children, title, id = '', headingLevel = 'h1',
}) {
  return (
    <div className="container mb-30">
      <PageTitleComponent title={title} id={id} headingLevel={headingLevel} />
      {children}
    </div>
  );
}

export default PageContainerComponent;
