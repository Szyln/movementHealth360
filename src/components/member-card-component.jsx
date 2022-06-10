import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Btn from './button-component';

function MemberCardComponent({
  member, getMemberName, isOpen = false,
}) {
  const {
    name, engName, id, img, professionalTitles, experiences,
  } = member;

  return (
    <div aria-hidden="true" className="bg-white border-primary border-around rounded p-6 overflow-y-auto h-md-down-100p w-100p">
      <div className="d-flex flex-column flex-md-row align-items-center text-gray-dark ">
        {/* photo, name, professional title, button */}
        <div className={`d-flex flex-column align-items-center ${isOpen ? 'w-md-30p w-lg-20p' : 'w-100p'}`}>
          <img src={img} alt={name} className="h-25 h-md-40 mb-6" />
          {/* member card: context part */}
          <div className="">
            <h3 className="text-primary mb-2 mb-md-6 fs-h4 fs-lg-h3">
              {name}
              <span className="ms-2 letter-space-normal fw-normal fs-h4">{engName}</span>
            </h3>
            {/* profeesion title */}
            <div>
              <ul className={`mb-5 ${isOpen ? 'minh-40' : 'minh-50'}`}>
                { professionalTitles.map((professionalTitle) => (
                  <li key={uuidv4()}>{professionalTitle}</li>
                )) }
              </ul>
            </div>
          </div>
          <Btn data={engName} getData={getMemberName} isOutline={isOpen}>{ isOpen ? '關閉' : '詳細' }</Btn>

        </div>
        {/* experience */}
        {isOpen && (
        <div className="ms-md-10 w-md-70p w-lg-80p">
          <h4 className="text-primary fs-h5 border-bottom border-primary mb-5 pb-1">資格</h4>
          <ul className="overflow-y-auto h-50">
            { experiences.map((experience) => (
              <li key={uuidv4()} className="list-style-disc fw-normal mb-1 letter-space-sm">{experience}</li>))}
          </ul>
        </div>

        )}
      </div>
    </div>
  );
}

export default MemberCardComponent;
