import React from 'react';
import EnrollBtn from './enroll-button';
import Btn from './button-component';

function ServiceCardHomepageComponent({ service, category }) {
  const {
    name, id, enable,
  } = service;

  return (
    <div className="border-primary border-around rounded">
      <div className="round-top bg-primary h-60 p-5 d-flex flex-column justify-content-end align-items-start">
        <h4 className='fs-h5 mb-3 bg-primary-dark text-white p-2 rounded-sm fw-normal lh-1 d-inline-block lh-1 letter-space-sm'>{category.name}</h4>
        <h3 className="text-white fs-h4 letter-space-normal mb-5">
          {name}
        </h3>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-stretch p-5 h-80">
        <img src={category.img} alt={category.name} className="h-70p mb-10" />
        <Btn isDisabled={!enable}>{ enable ? '立即報名' : '即將開課' }</Btn>
      </div>
    </div>
  );
}

export default ServiceCardHomepageComponent;
