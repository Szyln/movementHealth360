import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import PageTitleComponent from '../components/page-title-component';
import ServiceCardComponent from '../components/service-card-component';

function ServiceProductPage({
  filterCategoryProductList, getServiceName, category,
}) {
  // get from /service/:category
  // const { category } = useParams();

  return (
    <div className="col-12">
      {/* products (sort by category) */}
      {/* title: category name */}
      <Link to={`/service/#${category}`}>
        <PageTitleComponent id={category} headingLevel="h2">{category}</PageTitleComponent>
      </Link>
      <div className="row">
        {/* products in this category */}
        <div className="col-lg-10 offset-lg-1 mb-6">
          {/* product card */}
          {filterCategoryProductList(category).map((product) => (
            <div className="mb-4" key={uuidv4()}>
              <ServiceCardComponent service={product} getServiceName={getServiceName} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Link to="/service" className="text-center d-block py-5">回到頂端</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
ServiceProductPage.propTypes = {
  filterCategoryProductList: PropTypes.func.isRequired,
  getServiceName: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default ServiceProductPage;
