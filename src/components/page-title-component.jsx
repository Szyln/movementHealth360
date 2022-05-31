import React from 'react';

function PageTitleComponent({ title = '頁面標題' }) {
  return (
    <h1 className="text-primary border-bottom pt-50 mb-20">
      {title}
    </h1>
  );
}

export default PageTitleComponent;
