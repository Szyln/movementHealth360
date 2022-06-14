import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Btn from './button-component';
import Alert from './alert-component';

function ServiceCardComponent({ service, getServiceName, isOpen = false }) {
  const {
    name, id, img, descriptions, enable, link, alert,
  } = service;
  return (
    <div className="border-primary border-around rounded bg-white w-100p h-md-down-100p">
      {/* product title */}
      <div className={`bg-primary px-4 px-md-7 d-flex align-items-center  rounded-top-inside ${isOpen ? 'h-20p h-md-30' : 'h-30'}`}>
        <h3 className="text-white fs-h4 letter-space-md-paragraph">{name}</h3>
      </div>
      {/* product info */}
      <div className={`d-flex flex-column justify-content-between p-4 p-lg-5 ${isOpen ? 'overflow-y-auto h-80p' : ''}`}>
        <div className={`${isOpen ? '' : 'h-60 overflow-y-auto'} mb-5 `}>
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

            <Btn dataId={id} getData={getServiceName} isDisabled={!enable} link={enable ? link : ''} isLinkExternal>{enable ? '立即報名' : '規劃中'}</Btn>
          </li>
          <li className="w-100p">
            <Btn data={name} getData={getServiceName} isOutline theme="primary">{ isOpen ? '關閉' : '了解更多'}</Btn>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceCardComponent;
