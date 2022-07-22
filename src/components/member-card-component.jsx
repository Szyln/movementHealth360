import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Btn from './button-component';
import MemberDetailComponent from '../pages/about/member-detail-component';

function MemberCardComponent({
  member, getMemberName, isOpen = false,
}) {
  const {
    name, engName, img, professionalTitles, experiences,
    specialty, educationalBackgroundAndCertificate,
    professionalCourseRecord, link,
  } = member;

  return (
    <div aria-hidden="true" className="h-md-down-100p bg-white border-primary border-around rounded py-6 w-100p">
      <div className="px-6 overflow-y-auto h-100p">
        <div className=" d-flex flex-column flex-md-row align-items-center text-gray-dark ">
          {/* photo, name, professional title, button */}
          <div className={`d-flex flex-column align-items-center ${isOpen ? 'w-md-30p w-lg-20p' : 'w-100p'}`}>
            <img src={img} alt={name} className="h-25 h-md-40 mb-6" />
            {/* member card: context part */}
            <div>
              <h3 className="text-primary mb-2 mb-md-6 fs-h4 fs-lg-h3">
                {name}
                <span className="ms-2 letter-space-normal fw-normal fs-h4">{engName}</span>
              </h3>
              {/* profession title */}
              <div>
                <ul className={`mb-5 ${isOpen ? 'min-h-40' : 'min-h-50'}`}>
                  { professionalTitles.map((professionalTitle) => (
                    <li key={uuidv4()}>{professionalTitle}</li>
                  )) }
                </ul>
              </div>
            </div>
            <Btn data={engName} getData={getMemberName} isOutline={isOpen}>{ isOpen ? '關閉' : '詳細' }</Btn>
          </div>
          {/* experience */}
          {/* specialty, educationalBackgroundAndCertificate,
    professionalCourseRecord, link, */}
          {isOpen && (
            <div className="ms-md-10 w-md-70p w-lg-80p overflow-y-auto h-md-130 position-relative">
              <MemberDetailComponent title="專長" listOfDetail={specialty} />
              <MemberDetailComponent title="學歷、專業證照、國際認證" listOfDetail={educationalBackgroundAndCertificate} />
              <MemberDetailComponent title="專業課程結業" listOfDetail={professionalCourseRecord} />
              <MemberDetailComponent title="經歷" listOfDetail={experiences} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

MemberCardComponent.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    engName: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    professionalTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    experiences: PropTypes.arrayOf(PropTypes.string),
    specialty: PropTypes.arrayOf(PropTypes.string),
    educationalBackgroundAndCertificate: PropTypes.arrayOf(PropTypes.string),
    professionalCourseRecord: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.shape({
      linkTree: PropTypes.string,
    }),
  }).isRequired,
  getMemberName: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

MemberCardComponent.defaultProps = {
  isOpen: false,
};

export default MemberCardComponent;
