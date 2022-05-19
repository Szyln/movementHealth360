import React from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { v4 as uuidv4 } from 'uuid';
import NavigateLinkButtonComponent from '../components/navigate-link-button-component';
import NavListComponent from '../components/nav-list-component';
import ViewportHeightContainer from '../components/viewport-height-container';
import ServiceCardHomepageComponent from '../components/service-card-homepage-component';
import HomepageSectionTitleComponent from '../components/homepage/homepage-section-title-component';
import HomepageSectionComponent from '../components/homepage/homepage-section-component';
import HomepageSectionImgComponent from '../components/homepage/homepage-section-img-component';
import FeedbackCardComponent from '../components/feedback-card-component';

const lostImg = '../../src/img/secondary/Lost-bro.svg';
const coachImg = '../../src/img/secondary/Coach-bro.svg';
const elderImg = '../../src/img/secondary/Active-elderly-people-bro.svg';
const basketballImg = '../../src/img/secondary/Basketball-bro.svg';
const studentsImg = '../../src/img/secondary/Students-bro.svg';

// const avatar = require('../services/avatars.service');

function Homepage({ servicesList }) {
  const feedbackList = [
    {
      name: '膝蓋痛鄰居',
      id: uuidv4(),
      rate: '★★★★★',
      comment: '下次慢跑可以多跑一圈！',
    },
    {
      name: '蓋不到火鍋同學',
      id: uuidv4(),
      rate: '★★★★★',
      comment: '終於搶下一分！',
    },
    {
      name: '久站腳麻親戚',
      id: uuidv4(),
      rate: '★★★★★',
      comment: '專業！比以前更注重健康了！',
    },
  ];
  return (
    <>
      {/* hero banner */}
      <ViewportHeightContainer>
        <div className="d-flex pt-38 h-80vh justify-content-between">
          <div>
            <h1 className="text-primary">
              動作科學
              <br />
              運動訓練的全新策略
            </h1>
            <NavigateLinkButtonComponent linkTo="/service">立即體驗</NavigateLinkButtonComponent>
          </div>
          <div className="d-none d-lg-block align-self-end">
            <NavListComponent textColor="primary-dark" fontSizeClass="fs-h5 fs-md-h4" />
          </div>

        </div>
      </ViewportHeightContainer>
      {/* why */}
      <ViewportHeightContainer>
        <HomepageSectionComponent>
          <HomepageSectionTitleComponent>
            想改善身體
            <br />
            上健身房還是看醫生
            <br />
            沒頭緒？
          </HomepageSectionTitleComponent>
          <HomepageSectionImgComponent img={lostImg} />
        </HomepageSectionComponent>
      </ViewportHeightContainer>
      {/* how */}
      <ViewportHeightContainer>
        <HomepageSectionComponent>
          <div>
            <HomepageSectionTitleComponent>
              動作的問題
              <br />
              就用動作的方式解決
            </HomepageSectionTitleComponent>
            <NavigateLinkButtonComponent linkTo="/service">了解運動科學</NavigateLinkButtonComponent>
          </div>
          <HomepageSectionImgComponent img={coachImg} />
        </HomepageSectionComponent>
      </ViewportHeightContainer>
      {/* who */}
      <ViewportHeightContainer bgColor="secondary">
        <HomepageSectionComponent>
          <div>
            <HomepageSectionTitleComponent>
              提供不論
              <span className="text-primary-dark">一般民眾</span>
              <br />
              最完善健全的照顧
              <br />
              找回「動作健康」
              <br />
            </HomepageSectionTitleComponent>
            <NavigateLinkButtonComponent linkTo="/service" isWhite>立即體驗</NavigateLinkButtonComponent>
          </div>
          <ul className="overflow-y-scroll h-40vh">
            <li className="h-40vh">
              <HomepageSectionImgComponent img={elderImg} imgAlt="elder image" />
            </li>
            <li className="h-40vh">
              <HomepageSectionImgComponent img={basketballImg} imgAlt="2 men in a basketball game" />
            </li>
            <li className="h-40vh">
              <HomepageSectionImgComponent img={studentsImg} imgAlt="4 students" />
            </li>
          </ul>
        </HomepageSectionComponent>
      </ViewportHeightContainer>
      {/* what */}
      <ViewportHeightContainer container={false} fullHeight={false}>
        <Swiper
          className="my-2"
          slidesPerView={1.25}
          spaceBetween={24}
          centeredSlides
          loop
          breakpoints={{
            576: {
              slidesPerView: 1.25,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2.25,
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 3.25,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 4.25,
              spaceBetween: 16,
            },

          }}
        >
          {servicesList.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCardHomepageComponent service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ViewportHeightContainer>
      {/* feedback */}
      <ViewportHeightContainer bgColor="secondary" container={false} fullHeight={false}>
        <Swiper
          slidesPerView={1.25}
          spaceBetween={24}
          centeredSlides
          loop
          setWrapperSize
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1.25,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2.25,
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 3.25,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 4.25,
              spaceBetween: 16,
            },
          }}
          modules={[Autoplay]}
          className="z-0"
        >
          {feedbackList.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <FeedbackCardComponent feedback={feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <NavigateLinkButtonComponent linkTo="/service" isWhite isAlignEnd>立即體驗</NavigateLinkButtonComponent>
        </div>
      </ViewportHeightContainer>
    </>

  );
}

export default Homepage;
