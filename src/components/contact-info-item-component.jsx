import React from 'react';

function ContactInfoItemComponent({
  hrefType, children, bsIconName, fontSizeClasses = 'fs-lg-h4 fs-small',
}) {
  return (
    <li>
      <a href={`${hrefType}:${children}`} className={`py-3 text-gray-light text-decoration-none ${fontSizeClasses} fw-normal d-flex`}>
        <i className={`bi bi-${bsIconName} me-3`} />
        <span className="text-truncate">
          {children}
        </span>
      </a>
    </li>
  );
}

export default ContactInfoItemComponent;
