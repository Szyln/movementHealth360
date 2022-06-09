import React from 'react';

function PageTitleComponent({ children = '頁面標題', id, headingLevel }) {
  return (
    <>
      { headingLevel === 'h2' && (
        <h2 className="text-primary border-bottom pt-16 pt-sm- pt-md-38 pt-lg-20 mb-20" id={id}>
          {children}
        </h2>
      ) }
      {!id && (
        <h1 className="text-primary border-bottom pt-50 mb-20" id={id}>
          {children}
        </h1>
      )}
    </>
  );
}

export default PageTitleComponent;
