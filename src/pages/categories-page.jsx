import React from 'react';
import { Link } from 'react-router-dom';
import PageContainerComponent from '../components/page-container-component';
import Alert from '../components/alert-component';
// import CategoryCardComponent from '../components/service/category-card-component';
import Btn from '../components/button-component';

function CategoriesPage() {
  return (
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
        {/* {servicesCategories.map((category) => (
            <li className="col-12" key={uuidv4()}>
              <CategoryCardComponent category={category} filterCategoryProductList={filterCategoryProductList} getCategoryName={getCategoryName} />
            </li>
          ))} */}
      </ul>
    </PageContainerComponent>

  );
}

export default CategoriesPage;
