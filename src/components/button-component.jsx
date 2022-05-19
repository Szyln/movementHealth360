import React from 'react';

function Btn({
  theme = 'primary', children, data, getData, isOutline = false, isWhiteText = true, isDisabled = false,
}) {
  if (isDisabled === true) {
    theme = 'gray-light';
  }
  return (
    <button type="button" className={`${isOutline ? `border-around text-${theme}` : `bg-${theme} `} border-${theme} border-around text-${isWhiteText ? 'white' : theme} fs-h5 p-3 rounded fw-normal w-100p rounded-sm ${isDisabled ? 'pointer-events-none' : ''}`} data-id={data} onClick={getData} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Btn;
