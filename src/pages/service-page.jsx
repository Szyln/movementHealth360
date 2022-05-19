import React, { useState } from 'react';

import ServiceCardComponent from '../components/service-card-component';
import PageContainerComponent from '../components/page-container-component';

function ServicePage({ servicesList }) {
  const [currentService, setCurrentService] = useState('');
  const getServiceName = (e) => {
    console.log(e.target.dataset.id);
    if (currentService.name !== e.target.dataset.id) {
      setCurrentService(servicesList.find((service) => (
        service.name === e.target.dataset.id
      )));
    } else if (currentService.name === e.target.dataset.id) {
      setCurrentService('');
    }
  };

  return (
    <PageContainerComponent title="服務項目">
      <ul>
        {servicesList.map((service) => (
          <li key={service.id} className="mb-5">
            <div>
              <ServiceCardComponent service={service} getServiceName={getServiceName} />
            </div>
          </li>
        ))}
      </ul>
      {currentService && (
      <dialog className="rounded position-fixed top-0 bottom-0 left-0 right-0 p-5 d-flex align-items-center z-1000 ">
        <ServiceCardComponent service={currentService} getServiceName={getServiceName} isOpen />
      </dialog>
      )}
    </PageContainerComponent>
  );
}

export default ServicePage;
