import React from 'react';

function PageTitleComponent({ title = '頁面標題', id, headingLevel }) {
  return (
    <>
      { id && headingLevel === 'h2' && (
      <a href={`#${id}`}>
        <h2 className="text-primary border-bottom pt-50 mb-20">
          {title}
        </h2>
      </a>
      ) }
      {!id && (
        <h1 className="text-primary border-bottom pt-50 mb-20">
          {title}
        </h1>
      )}
    </>
  );
}

export default PageTitleComponent;
