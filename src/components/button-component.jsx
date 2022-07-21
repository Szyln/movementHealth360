import React from 'react';
import PropTypes from 'prop-types';

// 要用 React-Router 的 Link 的話，直接包在這個元件外面用

function Btn({
  theme = 'primary', children, data, getData, isOutline = false, isDisabled = false, link = '', isLinkExternal = false, otherClassName = '', target = '_blank',
}) {
  if (isLinkExternal) {
    return (
      <a
        href={link}
        target={target}
        className={`
            btn${isOutline && !isDisabled ? '-outline' : ''}${theme && !isDisabled ? `-${theme}` : ''}
            ${isDisabled ? 'btn-gray-light' : ''}
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
    );
  }
  return (
    <button
      type="button"
      className={`
            btn${isOutline && !isDisabled ? '-outline' : ''}${theme && !isDisabled ? `-${theme}` : ''}
            ${isDisabled ? 'btn-gray-light' : ''}
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
  );
}

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  isOutline: PropTypes.bool,
  isLinkExternal: PropTypes.bool,
  otherClassName: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.string,
  isDisabled: PropTypes.bool,
  data: PropTypes.string,
  getData: PropTypes.func,

};
Btn.defaultProps = {
  theme: 'primary',
  otherClassName: '',
  link: '',
  target: '_blank',
  isOutline: false,
  isLinkExternal: false,
  isDisabled: false,
  data: undefined,
  getData: undefined,

};
export default Btn;
