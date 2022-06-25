import React from 'react';
import PropTypes from 'prop-types';

function ContactInfoItemComponent({
  hrefType, children, bsIconName, fontSizeClasses = 'fs-lg-h4 fs-small',
}) {
  return (
    <li>
      <a href={`${hrefType}:${children}`} className={`py-3 text-gray-light text-decoration-none ${fontSizeClasses} fw-normal d-flex`}>
        <i className={`bi bi-${bsIconName} me-3`} />
        <span className="text-truncate letter-space-sm-paragraph">
          {children}
        </span>
      </a>
    </li>
  );
}

ContactInfoItemComponent.propTypes = {
  hrefType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bsIconName: PropTypes.string.isRequired,
  fontSizeClasses: PropTypes.string,

};
ContactInfoItemComponent.defaultProps = {
  fontSizeClasses: 'fs-lg-h4 fs-small',
};

export default ContactInfoItemComponent;
