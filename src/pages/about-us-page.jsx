import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import DocumentTitle from 'react-document-title';

import PageContainerComponent from '../components/page-container-component';
import MemberCardComponent from '../components/member-card-component';
import Modal from '../components/modal-component';

const logoPic = '/logo-LR-2color.svg';

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
    <DocumentTitle title="理念與團隊 - 動作健康 360">

      <PageContainerComponent title="我們！">
        <div className="mb-22 text-primary-dark">
          <div className="row">
            {/* logo */}
            <div className="col-md-4 col-lg-5 d-flex px-30 pb-10 pb-md-0 px-md-10 px-lg-6 mb-6">
              <img
                src={logoPic}
                alt="logo"
                className="max-w-100p
              "
              />
            </div>
            {/* introduction */}
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
            {/* how to start */}
            <PageContainerComponent title="品牌故事" headingLevel="h2">
              <div className="row">
                <div className="fw-normal">
                  <p className="mb-4">
                    運動不應該如此艱澀困難
                    <br />
                    運動不應該如此讓人畏懼害怕
                    <br />
                    運動應該要能讓人擁抱健康，而不是遠離健康
                    <br />
                    「動作健康360」的存在，就是為了幫助你解決一切的問題。
                  </p>

                  <p className="mb-4">
                    「如何完整地接住患者的恢復健康的過程？」
                    <br />
                    「動作健康360」的三位創辦人，彼此來自不同領域，卻不約而同地發出這個疑問。
                  </p>

                  <p className="mb-4">
                    醫療端與運動訓練端間始終存在著一條鴻溝。彼此語言、觀點、專業皆不同。民眾如迷途的旅人，在兩端之間不斷徘徊。
                    <br />
                    民眾用著不甚熟悉的詞語，吃力地說明自己的狀況，卻因兩端的鴻溝吃了閉門羹。
                  </p>

                  <p className="mb-4">三位創辦人，各自觀察到此問題。惴惴不安地與客戶走到了鴻溝之上，同時盡力地延伸自身專業，力求將客戶安全地送至對岸。因此結識了彼此。</p>

                  <p className="mb-4">
                    突然他們發現了答案，跨越鴻溝的那艘船，就是「動作健康」。
                    <br />
                    人生由一連串的動作所產生，「要活就要動，要動就要動得健康」：病人需要安全地活動、一般人需要健康地運動、運動員追求超人般的動作。
                  </p>

                  <p>
                    「動作健康360」願成為大眾在動作、在健康上的舵手。為大眾搭起醫療、運動兩端的橋樑。
                    <br />
                    讓運動不再如此讓人卻步，讓大家都能追求健康的美好，從運動中找回「動作健康」。
                  </p>

                </div>
              </div>

            </PageContainerComponent>
            <PageContainerComponent title="成員" headingLevel="h2" isContainer={false}>

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

            </PageContainerComponent>
          </div>
        </div>
        <div />
        {/* member modal */}
        {currentMember && (
          <Modal>
            <MemberCardComponent member={currentMember} getMemberName={getMemberName} isOpen />
          </Modal>
        )}
      </PageContainerComponent>
    </DocumentTitle>
  );
}
AboutUsPage.propTypes = {
  memberList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    engName: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    professionalTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    experiences: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default AboutUsPage;
