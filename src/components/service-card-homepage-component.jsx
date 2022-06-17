import React from 'react';
import EnrollBtn from './enroll-button';
import Btn from './button-component';

function ServiceCardHomepageComponent({ service, category }) {
  const {
    name, id, enable, link,
  } = service;

  return (
    <div className="border-primary border-around rounded">
      <div className="round-top bg-primary h-45 h-md-60 p-5 d-flex flex-column justify-content-end align-items-start">
        <h4 className="fs-h5 mb-3 bg-primary-dark text-white p-2 rounded-sm fw-normal d-inline-block lh-1 letter-space-sm">{category.name}</h4>
        <h3 className="text-white fs-h4 letter-space-normal mb-5">
          {name}
        </h3>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-stretch p-5 ">
        <img src={category.img} alt={category.name} className="h-60" />
      </div>

    </div>
  );
}

export default ServiceCardHomepageComponent;
