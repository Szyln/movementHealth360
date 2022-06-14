import React from 'react';
import { Link } from 'react-router-dom';

function Btn({
  theme = 'primary', children, data, getData, isOutline = false, isDisabled = false, link = '', isLinkExternal = false, isHash = false, otherClassName = '', target = '_blank'
}) {
  if (isDisabled === true) {
    theme = 'gray-light';
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { isLinkExternal ? (
        <a
          href={link}
          target={target}
          className={`
            btn${isOutline ? '-outline' : ''}${theme && `-${theme}`}
            fs-h5 p-3 fw-normal w-100p
            hover-expand-round hover-animation-center hover
            text-center

            ${isDisabled ? 'pointer-events-none' : ''}
            ${otherClassName}`}
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
            btn${isOutline ? '-outline' : ''}${theme && `-${theme}`}
            fs-h5 p-3 fw-normal w-100p
            hover-expand-round hover-animation-center hover
            ${isDisabled ? 'pointer-events-none' : ''}
            ${otherClassName}`}
          data-id={data}
          onClick={getData}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Btn;
