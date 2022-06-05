import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Btn from '../button-component';
import CardInfoSection from './card-info-section';

function CategoryCardComponent({ category, filterCategoryProductList, getCategoryName}) {
  const {
    name, img, descriptions, provide, features, product, enable, hide,
  } = category;
  return (
    <section className="row mb-4 gx-0" key={uuidv4()}>
      <div className="col-md-5 col-lg-4">
        <div className="bg-primary rounded-top-inside rounded-md-start-inside border-primary border-around rounded p-4 p-md-6 p-lg-7 d-flex flex-row-reverse  justify-content-between align-items-center flex-md-column h-100p">
          {/* category title & description */}
          <div className="mb-md-6">
            <h2 className="fs-h3 text-white mb-3">{name}</h2>
            { descriptions.map((description) => (
              <p className="text-secondary fw-normal d-none d-md-block" key={uuidv4()}>{description}</p>
            ))}
          </div>
          {/* category image */}
          <div className="w-20p w-md-100p">
            <img
              src={img}
              alt={name}
            />
          </div>
        </div>
      </div>
      {/* category info */}
      <div className="col-md-7 col-lg-8">
        <div className="p-7 d-flex flex-column justify-content-between border-primary  border-except-top border-md-except-start rounded-bottom rounded-md-end h-100p">
          <div>
            <div className="mb-6 d-md-none">
              { descriptions.map((description) => (
                <p className=" text-primary d-inline" key={uuidv4()}>{description}</p>
              ))}
            </div>
            {/* category provide */}
            <CardInfoSection title="動作健康 360 提供">
              { provide.map((point) => (
                <li className="list-style-disc mb-1" key={uuidv4()}>{point}</li>
              ))}
            </CardInfoSection>
            {/* category feature (option) */}
            { features && (
              <CardInfoSection title="特色">
                { features.map((feature) => (
                  <li className="list-style-disc mb-1" key={uuidv4()}>{feature}</li>
                )) }
              </CardInfoSection>
            )}
            {/* product list */}
            <CardInfoSection title="可購買項目" id="productList">
              { filterCategoryProductList(name).map((product) => (
                <li className="list-style-disc mb-1" key={uuidv4()}>{ product.name}</li>
              )) }
            </CardInfoSection>

          </div>

          <Btn link="#productList" isHash target="_self" otherClassName="mt-auto" isDisabled={!enable} data={name} getData={getCategoryName}>{ enable ? '立即報名' : '規劃中'}</Btn>

        </div>
      </div>
    </section>
  );
}

export default CategoryCardComponent;
