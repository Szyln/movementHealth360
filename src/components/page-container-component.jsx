import React from 'react';
import PropTypes from 'prop-types';
import PageTitleComponent from './page-title-component';

function PageContainerComponent({
  children, title = '頁面標題', id = '', headingLevel = 'h1', isContainer = true,
}) {
  return (
    <div className={`mb-30 ${isContainer ? 'container' : ''}`}>
      <PageTitleComponent
        title={title}
        id={id}
        headingLevel={headingLevel}
      >
        {title}
      </PageTitleComponent>
      {children}
    </div>
  );
}
PageContainerComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  id: PropTypes.string,
  headingLevel: PropTypes.string,
  isContainer: PropTypes.bool,

};
PageContainerComponent.defaultProps = {
  title: '頁面標題',
  id: undefined,
  headingLevel: 'h1',
  isContainer: true,
};
export default PageContainerComponent;
