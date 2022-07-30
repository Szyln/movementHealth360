import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Btn from '../button-component';

function ServiceCardBtnComponent({ getServiceName, service, isOpen }) {
  const { name, enable, link } = service;
  return (
    <ul className="d-flex justify-content-stretch flex-wrap row">
      <li className="col-sm-5 mb-2 mb-sm-0">
        {/* 如果是導到聯絡我們，不要用 a 標籤 */}
        {link === '/contact' && (
          <Link to={enable ? link : ''}>
            <Btn dataId={name} getData={getServiceName} isDisabled={!enable}>
              {enable ? '聯絡我們' : '規劃中'}
            </Btn>
          </Link>
        )}
        {link !== '/contact' && (
        <Btn theme="accent" dataId={name} getData={getServiceName} isDisabled={!enable} link={enable ? link : ''} isLinkExternal={link && true}>
          {enable ? '立即報名' : '規劃中'}
        </Btn>
        )}

      </li>
      <li className="col-sm-7">
        <Btn data={name} getData={getServiceName} isOutline theme="primary">{ isOpen ? '關閉' : '了解更多'}</Btn>
      </li>
    </ul>
  );
}
ServiceCardBtnComponent.propTypes = {
  getServiceName: PropTypes.func.isRequired,
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    enable: PropTypes.bool.isRequired,
    link: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ServiceCardBtnComponent;
