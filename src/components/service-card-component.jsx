import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// import EnrollBtn from './enroll-button';
import Btn from './button-component';
import Alert from './alert-component';

function ServiceCardComponent({ service, getServiceName, isOpen = false }) {
  const {
    name, id, img, descriptions, enable, link, alert,
  } = service;
  return (
    <div className="border-primary border-around rounded h-100p">
      {/* product title */}
      <div className="bg-primary p-4 p-md-7 d-flex align-items-center h-30">
        <h3 className="text-white fs-h4 ms-4 ms-lg-0 letter-space-md">{name}</h3>
      </div>
      {/* product info */}
      <div className="d-flex flex-column justify-content-between p-4 p-md-7">
        <div className={`${descriptions && 'h-60'} mb-5 overflow-y-auto`}>
          {alert && (<Alert isBold={false} size="sm" theme="accent">{ alert }</Alert>)}
          {/* product description */}
          {descriptions && (
          <ul className="mb-5">
            { descriptions.map((description) => (<li className="fw-normal list-style-disc" key={uuidv4()}>{description}</li>))}
          </ul>

          )}
        </div>

        <ul className="d-flex justify-content-stretch flex-wrap">
          <li className="w-100p mb-3">
            <Btn dataId={id} getData={getServiceName} isDisabled={!enable} link={enable ? link : ''}>{enable ? '立即報名' : '規劃中'}</Btn>
          </li>
          <li className={descriptions ? 'w-100p' : 'd-none'}>
            <Btn data={name} getData={getServiceName} isOutline isWhiteText={false}>{ isOpen ? '關閉' : '了解更多'}</Btn>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceCardComponent;
