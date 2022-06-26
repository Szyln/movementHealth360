import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import axios from 'axios';
import { DotWave } from '@uiball/loaders';

import NavComponent from './components/nav-component';

import FooterComponent from './components/footer-component';
import Homepage from './pages/homepage-page';
import AboutUsPage from './pages/about-us-page';
import ContactPage from './pages/contact-page';
import ServicePage from './pages/service-page';
import AboutMovementHealthPage from './pages/about-movement-health-page';
import ForbiddenPage from './pages/forbidden-page';

const logoImg = '/icon-2color.svg';
const DB_API = import.meta.env.VITE_DB_API;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [servicesList, setServicesList] = useState(null);
  const [servicesCategories, setServicesCategories] = useState(null);
  const [memberList, setMemberList] = useState(null);
  const [feedbackList, setFeedbackList] = useState(null);
  const [currentService, setCurrentService] = useState('');

  useLayoutEffect(() => {
    // axios.get(`${DB_API}servicesCategories`).then((res) => {
    //   setServicesCategories(res.data);
    //   console.log('categories: success');
    // }).catch((err) => {
    //   console.log(err);
    // });
    // axios.get(`${DB_API}servicesList`).then((res) => {
    //   setServicesList(res.data);
    //   console.log('Get categories: success');
    // }).catch((err) => {
    //   console.log(err);
    // });
    // axios.get(`${DB_API}memberList`).then((res) => {
    //   setMemberList(res.data);
    //   console.log('Get members: success');
    // }).catch((err) => {
    //   console.log(err);
    // });
    // axios.get(`${DB_API}feedbackList`).then((res) => {
    //   setFeedbackList(res.data);
    //   console.log('feedbackList: success');
    // }).catch((err) => {
    //   console.log(err);
    // });
  }, []);

  useEffect(() => {
    if (servicesList && servicesCategories && memberList && feedbackList) {
      setIsLoading(false);
    }
  }, [servicesList, servicesCategories, memberList, feedbackList]);
  // get product list which is in this(argument) category
  const filterCategoryProductList = (categoryName) => (
    servicesList.filter((service) => (service.category === categoryName))
  );
  // const getCategoryData = (CategoryOfProduct) => (
  //   servicesCategories.filter((category) => (category.name === CategoryOfProduct))
  // );
  const getServiceName = (e) => {
    if (currentService.name !== e.target.dataset.id) {
      setCurrentService(servicesList.find((service) => (
        service.name === e.target.dataset.id
      )));
    } else if (currentService.name === e.target.dataset.id) {
      setCurrentService('');
    }
  };
  if (isLoading) {
    return (
      <div className="bg-primary-dark h-100vh d-flex flex-column align-items-center justify-content-center transition-all">
        <img src={logoImg} alt="logo of Movement Health 360" className="w-20 mb-10" />

        <DotWave
          size={47}
          speed={1}
          color="#97cfac"
        />
      </div>
    );
  } if (!isLoading) {
    return (
      <div className="App">
        <header>
          <NavComponent />
        </header>
        <main>
          <DocumentTitle title="動作健康 360">
            {/* 使用 Routes 包住 Route */}
            <Routes>

              {/* Route 決定點連結之後會產生的內容 */}
              <Route path="/" element={<Homepage servicesList={servicesList} servicesCategories={servicesCategories} feedbackList={feedbackList} />} />
              <Route path="/service" element={<ServicePage servicesList={servicesList} servicesCategories={servicesCategories} filterCategoryProductList={filterCategoryProductList} currentService={currentService} getServiceName={getServiceName} />} />
              <Route path="/about/movementHealth" element={<AboutMovementHealthPage />} />
              <Route path="/about" element={<AboutUsPage memberList={memberList} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="*"
                element={<ForbiddenPage />}
              />
            </Routes>
          </DocumentTitle>
        </main>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
