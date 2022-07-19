import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Btn from './button-component';
import Alert from './alert-component';
import CardInfoSection from './service/card-info-section';
import ServiceCardBtnComponent from './service/service-card-btn-component';
import Badge from './badge-component';

function ServiceCardComponent({ service, getServiceName, isOpen = false }) {
  const {
    name, descriptions, features, products, appointment,
    allowRemote, allowClass, allowResident, requirement,
    alert,
  } = service;
  return (
    <div className={`border-primary border-around bg-white rounded ${isOpen ? 'max-h-100p flex-column d-flex justify-content-between ' : ''}  `}>
      {/* product title */}
      <div className=" bg-white p-4 p-md-7 border-bottom border-primary rounded-top">
        <h3 className="text-primary fs-h4 fs-md-h3 letter-space-normal-paragraph">{name}</h3>
      </div>
      {/* product info */}
      <div className={` 
      ${isOpen ? 'overflow-y-auto h-80p rounded' : 'overflow-y-auto'}
       p-4 p-lg-5`}
      >
        <div className="container-fluid">
          <div className="row">
            {/* badge info */}
            <ul className="d-flex mb-8 flex-wrap">
              <li>
                {alert && (<Badge theme="accent" isOutline textColor="accent">{ alert }</Badge>)}
              </li>
              <li>
                {appointment && (<Badge theme="accent" isOutline textColor="accent">{appointment === 'required' ? '需事前預約' : '可按照開班時間前往駐點報名參加'}</Badge>)}
              </li>
              <li>
                {allowRemote && (<Badge theme="secondary">可安排線上授課</Badge>)}
              </li>
              <li>

                {allowClass ? <Badge theme="primary" textColor="white">可安排團體授課</Badge> : <Badge theme="secondary">1 對 1</Badge>}

              </li>
              <li>
                {allowResident && <Badge theme="primary" textColor="white">可安排駐點</Badge>}
              </li>
            </ul>
            {/* main info */}
            <div className={`${isOpen ? ' col-lg-6' : ''}`}>
              {/* product description */}
              {descriptions && (
              <div className="mb-8">
                { descriptions.map((description) => (<p className="text-primary-dark fw-normal fs-lg-h4" key={uuidv4()}>{description}</p>))}
              </div>
              )}
              {features && (
              <CardInfoSection title="特色">
                {features && (
                <ul className="mb-4 fs-lg-h4">
                  {features.map((feature) => (
                    <li key={uuidv4()} className="fw-normal list-style-disc text-primary-dark mb-2">{feature}</li>
                  ))}
                </ul>
                )}
              </CardInfoSection>
              )}

            </div>
            {/* product selection */}
            {isOpen && (
              <div className={`${isOpen ? 'col-lg-6 overflow-y-auto h-100p' : ''}`}>
                <div className=" bg-secondary rounded p-5">
                  <CardInfoSection title="定價">
                    {products ? (
                      <ul className="mb-n2">
                        {products.map((product) => (
                          // class 必須重新設計樣式
                          <li key={uuidv4()} className={`fw-normal border-primary border-around p-4 rounded  text-primary mb-2  ${product.class ? 'bg-info' : 'bg-white'}`}>
                            <h4 className="text-center mb-2 border-bottom pb-2 letter-space-md fs-h4 mb-4">{product.name}</h4>

                            <div className="d-flex justify-content-between mb-4">
                              <ul>
                                <li>
                                  人數：
                                  {product.member.max === 1 && product.member.min === 1 && '1 對 1'}
                                  {product.member.max === 2 && '1 對 2'}
                                  {product.class && '團體授課'}
                                </li>

                                <li>
                                  低消：
                                  {product.unit.min}
                                  {' '}
                                  小時
                                </li>
                              </ul>
                              <div className="text-accent mb-6 text-end">
                                價格：
                                <span className="fw-bold">
                                  NT$
                                  {product.pricePerUnit}
                                </span>
                                {' '}
                                / 小時
                              </div>
                            </div>
                            {product.discount && (
                            <Alert theme="accent" isSmall isBold={false}>
                              本項目購滿
                                {' '}
                              {product.discount.unit}
                              {' '}
                              堂，折
                                {' '}
                              <span className="fw-bold">
                                NT$
                                {product.discount.unit * product.discount.discountPerUnit}
                              </span>
                              （NT$
                                {product.discount.discountPerUnit}
                              {' '}
                              / 小時）
                            </Alert>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="bg-white rounded p-4 border-around border-primary">
                        <p className="fs-h4 text-center mb-4 text-primary">歡迎聯繫訂製客製化課程</p>
                        <Link to="/contact">
                          <Btn isOutline>聯繫我們</Btn>
                        </Link>
                      </div>
                    ) }
                  </CardInfoSection>
                </div>
              </div>
            )}
            {/* for B2B info */}
            {allowResident && isOpen && (
              <div className="col-12">
                <div className="border-around border-primary rounded p-5 mt-4 bg-info">
                  <h3 className="text-primary letter-space-normal-paragraph mb-4" id="b2bOrderInfo">想要為您的企業員工、客戶安排課程嗎？</h3>
                  <p className="text-primary-dark mb-4 fw-normal fs-md-h4">
                    為公司、行號客戶，我們也有提供駐點合作、團體課程訂製服務，歡迎與我們聯繫！
                  </p>
                  {requirement && (
                    <div className="d-none">
                      <CardInfoSection title="器材需求">
                        <ul className="d-flex flex-wrap">
                          {requirement.map((equipment) => (
                            <li
                              key={uuidv4()}
                              className="list-style-disc w-30p w-md-50p w-lg-40p"
                            >
                              {equipment}
                            </li>
                          ))}
                        </ul>
                      </CardInfoSection>
                    </div>
                  )}
                  <Link to="/contact">
                    <Btn isOutline>聯繫我們</Btn>
                  </Link>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
      {/* button */}
      <div className="p-4 p-md-7">
        <ServiceCardBtnComponent
          getServiceName={getServiceName}
          service={service}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}
ServiceCardComponent.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alert: PropTypes.string,
    descriptions: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
    products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      pricePerUnit: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      unit: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
      member: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })),
    appointment: PropTypes.oneOf(['required', 'optional']),
    allowClass: PropTypes.bool,
    allowResident: PropTypes.bool,
    allowRemote: PropTypes.bool,
    requirement: PropTypes.arrayOf(PropTypes.string),
    enable: PropTypes.bool.isRequired,
    link: PropTypes.string,
  }).isRequired,
  getServiceName: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

ServiceCardComponent.defaultProps = {
  isOpen: false,
};

export default ServiceCardComponent;
