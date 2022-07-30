import React from 'react';
import PropTypes from 'prop-types';

function PageTitleComponent({
  children = '頁面標題', id, headingLevel = 'h1', textColor = 'primary',
}) {
  if (headingLevel === 'h2') {
    return (
      <h2 className={`text-${textColor} border-bottom pt-16 pt-sm- pt-md-38 pt-lg-20 mb-20 fs-h3 fs-md-h2`} id={id}>
        {children}
      </h2>

    );
  }
  return (
    <h1 className="text-primary border-bottom pt-25 pt-md-50 mb-20 fs-h2 fs-md-h1" id={id}>
      {children}
    </h1>

  );
}
PageTitleComponent.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  headingLevel: PropTypes.string,
  textColor: PropTypes.string,
};
PageTitleComponent.defaultProps = {
  id: undefined,
  headingLevel: 'h1',
  textColor: 'primary',
};

export default PageTitleComponent;
