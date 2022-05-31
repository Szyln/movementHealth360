import React from 'react';
import EnrollBtn from './enroll-button';
import Btn from './button-component';

function ServiceCardComponent({ service, getServiceName, isOpen = false }) {
  const {
    name, id, img, descriptions, enable, link,
  } = service;
  return (
    <div className="border-primary border-around rounded d-flex flex-column flex-lg-row">
      <div className="bg-primary p-4 p-md-7 d-flex flex-lg-column align-items-center">
        <img src={img} alt={name} className="w-30 w-lg-50 mb-lg-5" />
        <h3 className="text-white fs-h4 ms-4 ms-lg-0">{name}</h3>
      </div>
      <div className="d-flex flex-column justify-content-between p-4 p-md-7">
        <div className="mb-5">
          { descriptions.map((description) => (<p className="fw-normal letter-space-sm">{description}</p>))}
        </div>

        <ul className="d-flex justify-content-stretch">
          <li className="me-4 w-50p w-lg-80p">
            <Btn dataId={id} getData={getServiceName} isDisabled={!enable} link={enable ? link : ''}>{enable ? '立即報名' : '即將開課'}</Btn>
          </li>
          <li className="w-50p">
            <Btn data={name} getData={getServiceName} isOutline isWhiteText={false}>{ isOpen ? '關閉' : '了解更多'}</Btn>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceCardComponent;
