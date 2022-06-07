/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import ServiceCardComponent from '../components/service-card-component';
import PageContainerComponent from '../components/page-container-component';
import CategoryCardComponent from '../components/service/category-card-component';
import Alert from '../components/alert-component';
import Btn from '../components/button-component';
import PageTitleComponent from '../components/page-title-component';

function ServicePage({ servicesList, servicesCategories }) {
  const [currentService, setCurrentService] = useState('');
  const [currentCategoryName, setCurrentCategoryName] = useState('');
  const getServiceName = (e) => {
    if (currentService.name !== e.target.dataset.id) {
      setCurrentService(servicesList.find((service) => (
        service.name === e.target.dataset.id
      )));
    } else if (currentService.name === e.target.dataset.id) {
      setCurrentService('');
    }
  };
  const getCategoryName = (e) => {
    setCurrentCategoryName(e.target.dataset.id);
  };
  useEffect(() => {
    window.localStorage.setItem('category', currentCategoryName);
  }, [currentCategoryName]);

  // products that category is equal to argument
  const filterCategoryProductList = (categoryName) => (
    servicesList.filter((service) => (service.category === categoryName))
  );

  return (
    <DocumentTitle title="服務項目 - 動作健康 360">
      <>
        <PageContainerComponent title="服務項目">
          <Alert theme="primary" isBold={false}>
            <div className="d-lg-flex align-items-lg-center ">
              <p className="mb-4 mb-lg-0 me-lg-2"> 想更了解我們的服務項目？歡迎聯絡我們！</p>
              <Link to="/contact">
                <Btn theme="primary" isOutline>聯絡我們</Btn>
              </Link>
            </div>
          </Alert>
          <ul className="row mb-22">
            {servicesCategories.map((category) => (
              <li className="col-12" key={uuidv4()}>
                <CategoryCardComponent category={category} filterCategoryProductList={filterCategoryProductList} getCategoryName={getCategoryName} />
              </li>
            ))}
          </ul>
        {/* product filter */}
        <PageTitleComponent title="可購買項目" id="productList" headingLevel="h2" />
          <ul className="row">
            {!currentCategoryName && (
              servicesList.map((service) => (
                <li key={uuidv4()} className="mb-5 col-lg-6">
                  <ServiceCardComponent service={service} getServiceName={getServiceName} />
                </li>
              ))
            )}
            {filterCategoryProductList(currentCategoryName).map((service) => (
              <li key={uuidv4()} className="mb-5 col-lg-6">
                <ServiceCardComponent service={service} getServiceName={getServiceName} />
              </li>
            ))}
          </ul>
          {currentService && (
          <dialog className="rounded position-fixed top-0 bottom-0 left-0 right-0 p-5 d-flex align-items-center z-2000 ">
            <ServiceCardComponent service={currentService} getServiceName={getServiceName} isOpen />
          </dialog>
          )}

        </PageContainerComponent>
      </>
    </DocumentTitle>
  );
}

export default ServicePage;
