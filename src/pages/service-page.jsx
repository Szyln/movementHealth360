/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { v4 as uuidv4 } from 'uuid';
import { Link, Outlet } from 'react-router-dom';

// import ServiceCardComponent from '../components/service-card-component';
import PageContainerComponent from '../components/page-container-component';
import CategoryCardComponent from '../components/service/category-card-component';
import Alert from '../components/alert-component';
import Btn from '../components/button-component';
import PageTitleComponent from '../components/page-title-component';
import ServiceCardComponent from '../components/service-card-component';

function ServicePage({
  servicesList, servicesCategories,
}) {
  const [currentCategoryName, setCurrentCategoryName] = useState('');
  // const [currentService, setCurrentService] = useState('');
  useEffect(() => {
    console.log(currentCategoryName);

    window.localStorage.setItem('category', currentCategoryName);
  }, [currentCategoryName]);
  // const getServiceName = (e) => {
  //   if (currentService.name !== e.target.dataset.id) {
  //     setCurrentService(servicesList.find((service) => (
  //       service.name === e.target.dataset.id
  //     )));
  //   } else if (currentService.name === e.target.dataset.id) {
  //     setCurrentService('');
  //   }
  // };
  const getCategoryName = (e) => {
    setCurrentCategoryName(e.target.dataset.id);
  };
    // products that category is equal to argument
  const filterCategoryProductList = (categoryName) => (
    servicesList.filter((service) => (service.category === categoryName))
  );
  return (
    <DocumentTitle title="服務項目 - 動作健康 360">

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
        <ul>
          <li>
            <Link to="/service">到分類</Link>
          </li>
        </ul>
        {servicesCategories.map((category) => (
          <div className="row" key={uuidv4()}>
            <Link to={`/service/${category.name}`}>
              <PageTitleComponent id={category.name} headingLevel="h2">{category.name}</PageTitleComponent>
            </Link>
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                {filterCategoryProductList(category.name).map((product) => (
                  <div className="col-md-6 mb-4">
                    <ServiceCardComponent service={product} />
                  </div>
                ))}

              </div>

            </div>

          </div>
        ))}
        <Outlet />
      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default ServicePage;
