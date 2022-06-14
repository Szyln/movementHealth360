/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

// import ServiceCardComponent from '../components/service-card-component';
import PageContainerComponent from '../components/page-container-component';
import CategoryCardComponent from '../components/service/category-card-component';
import Alert from '../components/alert-component';
import Btn from '../components/button-component';
import ServiceCardComponent from '../components/service-card-component';
import ServiceProductPage from './service-product-page';

function ServicePage({
  servicesList, servicesCategories, filterCategoryProductList, currentService, setCurrentService, getServiceName,
}) {
  const [currentCategoryName, setCurrentCategoryName] = useState('');

  useEffect(() => {
    window.localStorage.setItem('category', currentCategoryName);
  }, [currentCategoryName]);
  const getCategoryName = (e) => {
    setCurrentCategoryName(e.target.dataset.id);
  };
  // for product card modal
  // const navigate = useNavigate();
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
          {/* list of categories */}
          <ul className="row mb-22">
            {servicesCategories.map((category) => (
              <li className="col-12" key={uuidv4()}>
                <CategoryCardComponent category={category} filterCategoryProductList={filterCategoryProductList} getCategoryName={getCategoryName} />
              </li>
            ))}
          </ul>

          {/* product in category */}
          {servicesCategories.map((category) => (
            <div key={uuidv4()}>
              <ServiceProductPage category={category.name} servicesList={servicesList} filterCategoryProductList={filterCategoryProductList} getServiceName={getServiceName} />
            </div>
          ))}

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
