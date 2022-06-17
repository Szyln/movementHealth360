import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import DocumentTitle from 'react-document-title';

import PageContainerComponent from '../components/page-container-component';
import MemberCardComponent from '../components/member-card-component';

const logoPic = '/logo-LR-2color.svg';
// const memberLarryPic = '/memberLarryPicture.svg';
// const memberTYPic = '/memberTYPicture.svg';
// const memberZoePic = '/memberZoePicture.svg';
function AboutUsPage({ memberList }) {
  const [currentMember, setCurrentMember] = useState('');
  const getMemberName = (e) => {
    if (currentMember.engName !== e.target.dataset.id) {
      setCurrentMember(memberList.find((member) => (
        member.engName === e.target.dataset.id
      )));
    } else if (currentMember.engName === e.target.dataset.id) {
      setCurrentMember('');
    }
  };

  return (
    <DocumentTitle title="我們！ - 動作健康 360">

      <PageContainerComponent title="我們！">
        <div className="mb-22 text-primary-dark">
          <div className="row">
            <div className="col-md-4 col-lg-5 d-flex px-30 pb-10 pb-md-0 px-md-10 px-lg-6 mb-6">
              <img
                src={logoPic}
                alt="logo"
                className="maxw-100p
              "
              />
            </div>
            <div className="col-md-7 col-lg-6  offset-md-1">
              <h2 className="fs-h3 fs-lg-h2 mb-10 letter-space-md-paragraph">
                動作健康 360
                <br />
                <span className="fs-h4 text-end w-100p d-inline-block text-primary">──屬於你的動作訓練所</span>
              </h2>
              <div className="fs-lg-h4 fw-normal">
                <ul className="mb-10">
                  <li className="mb-2">身體動作失能，醫療介入。</li>
                  <li className="mb-2">傷後回場訓練，結合運動防護。</li>
                  <li>動作技巧優化，專項肌力體能。</li>
                </ul>
                <p className="mb-2">
                  We move Better. Smarter. Healthier.
                </p>
                <p>動作的問題，就用動作的方法解決。</p>
              </div>
            </div>

          </div>
        </div>
        <div>
          <Swiper
            className="p-2"
            slidesPerView={1.25}
            spaceBetween={24}
            breakpoints={{
              576: {
                slidesPerView: 1.1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 2.5,
                spaceBetween: 16,
              },
              1120: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
          >
            {memberList.map((member) => (
              <div key={uuidv4()}>
                <SwiperSlide key={uuidv4()}>
                  <MemberCardComponent member={member} getMemberName={getMemberName} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        {/* member modal */}
        {currentMember && (
        <div className="p-3 position-fixed top-50 left-50 translate-middle d-flex align-items-center z-1000 w-100p   w-lg-90p w-xl-80p h-md-down-100p">
          <MemberCardComponent member={currentMember} getMemberName={getMemberName} isOpen />
        </div>
        )}
      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default AboutUsPage;
