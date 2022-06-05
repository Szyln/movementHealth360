import React from 'react';

function Btn({
  theme = 'primary', children, data, getData, isOutline = false, isWhiteText = true, isDisabled = false, link = '', otherClassName = '',
}) {
  if (isDisabled === true) {
    theme = 'gray-light';
  }
  if (isOutline === true) {
    isWhiteText = false;
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        link ? (
          <a
            href={link}
            target="_blank"
            className={`
              border-around
              fs-h5 p-3 rounded fw-normal w-100p rounded-sm
              ${isOutline ? `border-around text-${theme} hover-button bg-white` : `bg-${theme} `}
              border-${theme}
              text-${isWhiteText ? 'white' : theme}
              hover-btn-link${isOutline ? '-outline' : ''}${`-${theme}`}
              ${isDisabled ? 'pointer-events-none' : ''}
              text-center
              text-decoration-none
              ${otherClassName}
            `}
            data-id={data}
            onClick={getData}
            disabled={isDisabled}
            rel="noreferrer"
          >
            {children}
          </a>
        ) : (
          <button
            type="button"
            className={`
              border-around
              fs-h5 p-3 rounded fw-normal w-100p rounded-sm
              ${isOutline ? `border-around text-${theme} hover-button bg-white` : `bg-${theme} `}
              border-${theme}
              text-${isWhiteText ? 'white' : theme}
              hover-btn-link${isOutline ? '-outline' : ''}${`-${theme}`}
              ${isDisabled ? 'pointer-events-none' : ''}
              link ${otherClassName}`}
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
