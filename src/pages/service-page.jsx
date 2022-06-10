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
  // for product card modal
  const [currentService, setCurrentService] = useState('');
  useEffect(() => {
    window.localStorage.setItem('category', currentCategoryName);
  }, [currentCategoryName]);
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
          {/* products (sort by category) */}
          {servicesCategories.map((category) => (
            <div className="row" key={uuidv4()}>
              {/* category name */}
              <Link to={{ pathname: '/service', hash: `#${category.name}` }}>
                <PageTitleComponent id={category.name} headingLevel="h2">{category.name}</PageTitleComponent>
              </Link>
              {/* products in this category */}
              <div className="col-lg-10 offset-lg-1 mb-6 ">
                <div className="row">
                  {filterCategoryProductList(category.name).map((product) => (
                    <div className="col-md-6 mb-4" key={uuidv4()}>
                      <ServiceCardComponent service={product} getServiceName={getServiceName} />
                    </div>
                  ))}

                </div>

              </div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <Link to="/service" className="text-center d-block py-5">回到頂端</Link>

                </div>
              </div>
            </div>
          ))}
          <Outlet />
        </PageContainerComponent>
        {/* product modal */}
        {currentService && (

          <div className="p-3 position-fixed top-50 left-50 translate-middle d-flex align-items-center z-1000 w-100p w-sm-80p w-md-60p w-lg-40p w-xl-30p h-md-down-100p">

            <ServiceCardComponent service={currentService} getServiceName={getServiceName} isOpen />

          </div>

        )}
      </>
    </DocumentTitle>
  );
}

export default ServicePage;
