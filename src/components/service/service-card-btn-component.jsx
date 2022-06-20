import React from 'react';
import Btn from '../button-component';

function ServiceCardBtnComponent({ getServiceName, service, isOpen }) {
  return (
    <ul className="d-flex justify-content-stretch flex-wrap row">
      <li className="col-sm-5 mb-2 mb-sm-0">
        <Btn dataId={service.name} getData={getServiceName} isDisabled={!service.enable} link={service.enable ? service.link : ''} isLinkExternal>{service.enable ? '立即報名' : '規劃中'}</Btn>
      </li>
      <li className="col-sm-7">
        <Btn data={service.name} getData={getServiceName} isOutline theme="primary">{ isOpen ? '關閉' : '了解更多'}</Btn>
      </li>
    </ul>
  );
}

export default ServiceCardBtnComponent;
