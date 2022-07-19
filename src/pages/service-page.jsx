import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageContainerComponent from '../components/page-container-component';
import CategoryCardComponent from '../components/service/category-card-component';
import Alert from '../components/alert-component';
import Btn from '../components/button-component';
import ServiceCardComponent from '../components/service-card-component';
import ServiceProductPage from './service-product-page';
import Modal from '../components/modal-component';

function ServicePage({
  servicesList,
  servicesCategories,
  filterCategoryProductList,
  currentService,
  getServiceName,
}) {
  const [currentCategoryName, setCurrentCategoryName] = useState('');

  useEffect(() => {
    window.localStorage.setItem('category', currentCategoryName);
  }, [currentCategoryName]);

  const getCategoryName = (e) => {
    setCurrentCategoryName(e.target.dataset.id);
  };

  // const getCurrentCategory = (e) => {
  //   if (currentCategory.name !== e.target.dataset.id) {
  //     setCurrentCategory(servicesCategories.find((category) => (
  //       category.name === e.target.dataset.id
  //     )));
  //   } else if (currentCategory.name === e.target.dataset.id) {
  //     setCurrentCategory('');
  //   }
  // };

  // TODO ServiceProductPage 的 category 只有 name，希望可以抓到 enable
  // 從 CategoryCardComponent 抓 currentCategory 到 ServiceProductPage
  return (
    <DocumentTitle title="服務 - 動作健康 360">
      <>
        <PageContainerComponent title="服務">
          <Alert theme="primary" isBold={false}>
            <div className="d-lg-flex align-items-lg-center">
              <p className="mb-4 mb-lg-0 me-lg-2 ">想更了解我們的服務？歡迎聯絡我們！</p>
              <ul className="d-lg-flex flex-no-shrink">
                <li className="mb-3 mb-lg-0 me-lg-2">
                  <Link to="/contact">
                    <Btn theme="primary" isOutline>聯絡我們</Btn>
                  </Link>

                </li>
                <li>
                  <Btn link="https://lin.ee/5pVAw4z" isLinkExternal isOutline>
                    <i className="bi bi-line me-2" />
                    加入官方 LINE
                  </Btn>

                </li>

              </ul>
            </div>
          </Alert>
          {/* list of categories */}
          <ul className="row mb-22">
            {servicesCategories.map((category) => (
              <li className="col-12" key={uuidv4()}>
                <CategoryCardComponent
                  category={category}
                  filterCategoryProductList={filterCategoryProductList}
                  getCategoryName={getCategoryName}
                />
              </li>
            ))}
          </ul>

          {/* product in category */}
          {servicesCategories.map((category) => (
            <div key={uuidv4()} className="row">
              <ServiceProductPage
                category={category.name}
                servicesList={servicesList}
                filterCategoryProductList={filterCategoryProductList}
                getServiceName={getServiceName}
              />
            </div>
          ))}

        </PageContainerComponent>
        {/* product modal */}
        {currentService && (
          <Modal>
            <ServiceCardComponent service={currentService} getServiceName={getServiceName} isOpen />
          </Modal>

        )}

      </>
    </DocumentTitle>
  );
}

ServicePage.propTypes = {
  servicesList: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,

  servicesCategories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    provide: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(PropTypes.string),
    enable: PropTypes.bool.isRequired,
    hide: PropTypes.bool.isRequired,
  })).isRequired,
  filterCategoryProductList: PropTypes.func.isRequired,
  currentService: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
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
    }),
  ]).isRequired,

  getServiceName: PropTypes.func.isRequired,
};

export default ServicePage;
