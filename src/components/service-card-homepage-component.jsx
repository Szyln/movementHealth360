import React from 'react';
import EnrollBtn from './enroll-button';
import Btn from './button-component';

function ServiceCardHomepageComponent({ service }) {
  const { name, id, img, enable } = service;

  return (
    <div className="border-primary border-around rounded">
      <div className="round-top bg-primary h-60 p-5 d-flex align-items-end">
        <h3 className="text-white fs-h4 letter-space-normal mb-5">
          {name}
        </h3>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-stretch p-5 h-60">
        <img src={img} alt={name} className="h-100p mb-10" />
        <Btn isDisabled={!enable}>{ enable ? '立即報名' : '即將開課'}</Btn>
      </div>
    </div>
  );
}

export default ServiceCardHomepageComponent;
