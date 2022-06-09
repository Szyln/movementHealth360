import React, { useEffect, useRef } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { v4 as uuidv4 } from 'uuid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DocumentTitle from 'react-document-title';
import NavigateLinkButtonComponent from '../components/navigate-link-button-component';
import NavListComponent from '../components/nav-list-component';
import ViewportHeightContainer from '../components/viewport-height-container';
import ServiceCardHomepageComponent from '../components/service-card-homepage-component';
import HomepageSectionTitleComponent from '../components/homepage/homepage-section-title-component';
import HomepageSectionComponent from '../components/homepage/homepage-section-component';
import HomepageSectionImgComponent from '../components/homepage/homepage-section-img-component';
import FeedbackCardComponent from '../components/feedback-card-component';

const lostImg = '/Lost-bro.svg';
const coachImg = '/Coach-bro.svg';
const elderImg = '/Active-elderly-people-bro.svg';
const basketballImg = '/Basketball-bro.svg';
const studentsImg = '/Students-bro.svg';

function Homepage({ servicesList, servicesCategories }) {
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

  // gsap animation
  const mainRef = useRef();
  const q = gsap.utils.selector(mainRef);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: q('.who'),
        start: 'top top',
        end: '+=260%',
        pin: q('.who'),
        toggleActions: 'play pause reverse reverse',
        scrub: 2,
      },
    });
    tl.from('.scrollTrigger-1', {
      y: '+=40',
      opacity: 0,
      duration: 100,
    })
      .to('.scrollTrigger-1', {
        y: '-=10',
        opacity: 0,
        duration: 100,

      })
      .from('.scrollTrigger-2', {
        y: '+=40',
        opacity: 0,
        duration: 100,
      })
      .to('.scrollTrigger-2', {
        y: '-=10',
        opacity: 0,
        duration: 100,
      })
      .from('.scrollTrigger-3', {
        y: '+=40',
        opacity: 0,
        duration: 100,
      })
      .to('.scrollTrigger-3', {
        y: '-=10',
        opacity: 0,
        duration: 100,

      });
  });

  const getCategoryOfProduct = (CategoryOfProduct) => (
    servicesCategories.find((category) => (category.name === CategoryOfProduct))
  );

  return (
    <DocumentTitle title="首頁 - 動作健康 360">
      <div ref={mainRef} className="overflow-x-hidden">
        {/* hero banner */}
        <ViewportHeightContainer>
          <div className="d-flex flex-column flex-md-row pt-10 pt-md-38 h-80vh justify-content-between">
            <div>
              <h1 className="text-primary">
                動作科學
                <br />
                運動訓練的全新策略
              </h1>
              <NavigateLinkButtonComponent linkTo="/service">立即體驗</NavigateLinkButtonComponent>
            </div>
            <div className="align-self-end d2222">
              <NavListComponent textColor="primary-dark" fontSizeClass="fs-h4 fs-md-h4" />
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
              <NavigateLinkButtonComponent linkTo="/about/movementHealth">了解運動科學</NavigateLinkButtonComponent>
            </div>
            <HomepageSectionImgComponent img={coachImg} />
          </HomepageSectionComponent>
        </ViewportHeightContainer>
        {/* who */}
        <ViewportHeightContainer bgColor="secondary" otherClassName="who">

          <HomepageSectionComponent>
            <div className="mb-6 mb-lg-0">
              <HomepageSectionTitleComponent>
                提供不論
                <span className="d-inline-block position-relative z-n1">
                  <div className="opacity-0">男女老少</div>
                  <span className="text-primary-dark position-absolute top-0 left-0 w-100p scrollTrigger-1 opacity-1">男女老少</span>
                  <span className="text-primary-dark position-absolute top-0 w-100p scrollTrigger-2">團體包班</span>
                  <span className="text-primary-dark position-absolute top-0 w-100p scrollTrigger-3">運動員</span>

                </span>
                <br />
                最完善健全的照顧
                <br />
                找回「動作健康」
                <br />
              </HomepageSectionTitleComponent>
              <NavigateLinkButtonComponent linkTo="/service" isWhite>立即體驗</NavigateLinkButtonComponent>
            </div>
            <div className="position-relative w-90p w-lg-20vw h-40vh d-flex align-items-center">
              <HomepageSectionImgComponent img={elderImg} imgAlt="elder image" otherClass="scrollTrigger-1 position-absolute transition-y-middle" />
              <HomepageSectionImgComponent img={studentsImg} imgAlt="4 students" otherClass="scrollTrigger-2 position-absolute  transition-y-middle" />
              <HomepageSectionImgComponent img={basketballImg} imgAlt="2 men in a basketball game" otherClass="scrollTrigger-3 position-absolute  transition-y-middle" />
            </div>
          </HomepageSectionComponent>
        </ViewportHeightContainer>
        {/* what */}
        <ViewportHeightContainer fullHeight={false}>
          <div className="row flex-column flex-md-row flex-md-nowrap align-items-center">
            <div className="col-md-4 d-flex flex-column align-items-center align-items-md-start">
              <div className="">
                <HomepageSectionTitleComponent>
                  帶你
                  <br />
                  理解動作、掌握健康
                </HomepageSectionTitleComponent>
                <NavigateLinkButtonComponent linkTo="/service">探索服務</NavigateLinkButtonComponent>
              </div>
            </div>
            <div className="offset-md-1 offset-lg-2 col-md-12">
              <Swiper
                className="p-2 me-n24 mx-sm-n20 ms-md-0 me-md-n22 me-lg-0"
                slidesPerView={1.25}
                spaceBetween={24}
                loop
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                    spaceBetween: 24,

                  },
                  576: {
                    slidesPerView: 1.25,
                    spaceBetween: 24,
                    centeredSlides: true,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    centeredSlides: false,
                  },
                  992: {
                    slidesPerView: 2.25,
                    spaceBetween: 16,
                  },
                  1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 16,
                  },
                }}
              >
                {servicesList.map((service) => (
                  <SwiperSlide key={service.id}>
                    <ServiceCardHomepageComponent service={service} category={getCategoryOfProduct(service.category)} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <HomepageSectionComponent />
        </ViewportHeightContainer>

        {/* feedback */}
        <ViewportHeightContainer bgColor="secondary" container={false} fullHeight={false}>
          <Swiper
            className="z-0 p-2"
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
      </div>
    </DocumentTitle>
  );
}

export default Homepage;
