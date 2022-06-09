import React, { useState } from 'react';
// import { Outlet, Link } from 'react-router-dom';
import PageTitleComponent from '../components/page-title-component';
// import ServiceCardComponent from '../components/service-card-component';

function ServiceProductPage({ category }) {
  const {
    name, img, descriptions, provide, features, product, enable, hide,
  } = category;
  return (
    <div>
      {/* product filter */}
      <PageTitleComponent id="productList" headingLevel="h2">{name}</PageTitleComponent>
      <ul className="row">
        {/* {!currentCategoryName && (
          servicesList.map((service) => (
            <li key={uuidv4()} className="mb-5 col-lg-6">
              <ServiceCardComponent service={service} getServiceName={getServiceName} />
            </li>
          ))
        )} */}
        {/* {filterCategoryProductList(currentCategoryName).map((service) => (
          <li key={uuidv4()} className="mb-5 col-lg-6">
            <ServiceCardComponent service={service} getServiceName={getServiceName} />
          </li>
        ))} */}
      </ul>
      {/* {currentService && (
        <dialog className="rounded position-fixed top-0 bottom-0 left-0 right-0 p-5 d-flex align-items-center z-2000 ">
          <ServiceCardComponent service={currentService} getServiceName={getServiceName} isOpen />
        </dialog>
      )} */}

    </div>
  );
}

export default ServiceProductPage;
