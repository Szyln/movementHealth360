import React from 'react';

function CardInfoSection({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="fs-h5 mb-3 bg-primary text-white p-2 rounded-sm letter-space-normal fw-normal lh-1 d-inline-block lh-1">{title}</h3>
      <ul className="fw-normal text-primary-dark mb-n1">
        {children}
      </ul>
    </div>
  );
}

export default CardInfoSection;
