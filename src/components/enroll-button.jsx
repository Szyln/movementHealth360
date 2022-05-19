import React, { useEffect, useState } from 'react';

function EnrollBtn({ children, dataId, isSizeSmall = false }) {
  const [enrollId, setEnrollId] = useState(
    // check if localStorage have had any  value before refreshing pages
    () => (window.localStorage.getItem('enrollId') || ''),
  );

  const getIdHandler = (e) => {
    setEnrollId(e.target.dataset.id);
  };

  useEffect(() => {
    console.log('useEffect!');
    window.localStorage.setItem('enrollId', enrollId);
  }, [enrollId]);

  return (
    <button type="button" className="bg-primary rounded border-around border-primary text-white p-3 fs-h4" data-id={dataId} onClick={getIdHandler}>
      {children}
    </button>
  );
}

export default EnrollBtn;
