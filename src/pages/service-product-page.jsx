import React from 'react';
// import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PageTitleComponent from '../components/page-title-component';
import ServiceCardComponent from '../components/service-card-component';

function ServiceProductPage({ servicesList, filterCategoryProductList, getServiceName, category }) {
  // get from /service/:category
  // const { category } = useParams();

  return (
    <div className="row">
      {/* products (sort by category) */}
      {/* title: category name */}
      <Link to={`/service/#${category}`}>
        <PageTitleComponent id={category} headingLevel="h2">{category}</PageTitleComponent>
      </Link>
      {/* products in this category */}
      <div className="col-lg-10 offset-lg-1 mb-6 ">
        <div className="row">
          {filterCategoryProductList(category).map((product) => (
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
  );
}

export default ServiceProductPage;
