import React from 'react';

function Btn({
  theme = 'primary', children, data, getData, isOutline = false, isWhiteText = true, isDisabled = false, link = '',
}) {
  if (isDisabled === true) {
    theme = 'gray-light';
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        link ? (
          <a
            href={link}
            className={`
              border-around
              fs-h5 p-3 rounded fw-normal w-100p rounded-sm
              ${isOutline ? `border-around text-${theme} hover-button` : `bg-${theme} `}
              border-${theme}
              text-${isWhiteText ? 'white' : theme}
              hover-btn-link${isOutline ? '-outline' : ''}${`-${theme}`}
              ${isDisabled ? 'pointer-events-none' : ''}
              text-center
              text-decoration-none`}
            data-id={data}
            onClick={getData}
            disabled={isDisabled}
          >
            {children}
          </a>
        ) : (
          <button
            type="button"
            className={`
              border-around
              fs-h5 p-3 rounded fw-normal w-100p rounded-sm
              ${isOutline ? `border-around text-${theme} hover-button` : `bg-${theme} `}
              border-${theme}
              text-${isWhiteText ? 'white' : theme}
              hover-btn-link${isOutline ? '-outline' : ''}${`-${theme}`}
              ${isDisabled ? 'pointer-events-none' : ''}`}
            data-id={data}
            onClick={getData}
            disabled={isDisabled}
          >
            {children}
          </button>
        )
    }
    </>
  );
}

export default Btn;
