import React from 'react';

function BgBtn({
  children, isPrimary = true, isSmallSize = false, isFullWidth = false, id = '', setDataId,
}) {
  const getIdHandler = (e) => {
    setDataId(e.target.dataset.id);
  };

  return (
    <button type="button" className={`${isPrimary ? 'bg-primary text-white border-primary' : ''} rounded border-around  ${isSmallSize ? 'fs-h5 fw-normal p-2 ' : 'p-3 fs-h4'} ${isFullWidth ? 'w-100p' : ''}`} onClick={getIdHandler} data-id={id}>
      {children}
    </button>
  );
}

export default BgBtn;
