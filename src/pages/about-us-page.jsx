import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import DocumentTitle from 'react-document-title';
import PageContainerComponent from '../components/page-container-component';
import MemberCardComponent from '../components/member-card-component';

const memberLarryPic = '/memberLarryPicture.svg';
const memberTYPic = '/memberTYPicture.svg';
const memberZoePic = '/memberZoePicture.svg';

function AboutUsPage() {
  const memberList = [
    {
      name: '賴冠霖',
      engName: 'Larry',
      id: uuidv4(),
      img: memberLarryPic,
      professionalTitles: [
        '動作健康 360 品牌總監',
        '動作健康認證測試人員',
        '動作健康講師',
      ],
      experiences: [
        '中華民國國家考試合格物理治療師',
        '國立台灣大學醫學院物理治療系學士',
        '長期照護醫事人員繼續教育計畫- Level II 物理治療師',
        '美國國家肌力體能訓練協會認證-肌力與體能訓練專家 NSCA-CSCS',
        '英國 CMS - KC 動作治療師 (Kinetic Control Movement Therapist)',
        '英國 CMS –動作健康管理系統 認證檢測人員(The Performance Matrix: TPM-pro)',
        '英國 Kinetic Control：人體動作控制訓練-動作解決策略 1～2 （The Movement Solution 1～2）',
        '英國 The Performance Matrix 動作健康與運動表現檢測系統 (The Performance Solution 1)',
        '英國 Movement Science Practitioner 實證動作學 系列 (Movement Fundamentals, Trunk, Neck & Shoulder)',
        '美國 GRAY Institute 3Dmaps 格雷學院 3D 動態分析及表現 - 國際認證',
        '澳洲 Dynamic Tape：動態貼布貼紮技術 1 (Dynamic Taping - Level 1)',
      ],
    },
    {
      name: '林廷彥',
      engName: 'T.Y.',
      id: uuidv4(),
      img: memberTYPic,
      professionalTitles: [
        '行銷企劃',
        '培訓測試人員',
        '培訓講師',
      ],
      experiences: [
        '高雄醫學大學醫學院運動醫學學士',
        '美國國家肌力體能訓練協會認證-肌力與體能訓練專家 NSCA-CSCS',
        '美國 CrossFit 一級訓練員 CrossFit Level 1 Trainer',
        '美國 CrossFit 體操認證 Functional Gymnastics Trainer',
        '英國 Movement Science Practitioner 實證動作學 系列 (Movement Fundamentals, Trunk, Neck & Shoulder)',
        '台灣運動保健協會 運動按摩技術員 TATHA - SMT',
        '中華肌內效貼紮協會 C級認證',
      ],
    },
    {
      name: '劉千瑈',
      engName: 'Zoe',
      id: uuidv4(),
      img: memberZoePic,
      professionalTitles: [
        '培訓測試人員',
        '業務合作接洽窗口',
      ],
      experiences: [
        '高雄醫學大學醫學院運動醫學學士',
        '台北市華江高級中學運動傷害防護員',
        '美國國家肌力體能訓練協會認證-肌力與體能訓練專家 NSCA-CSCS',
        '英國 Movement Science Practitioner 實證動作學 系列 (Movement Fundamentals, Trunk, Neck & Shoulder)',
        '初級救護技術員（EMT1）',
        '動態貼布 Dynamic Taping Level 1',
        '紅繩訓練 Redcord Neurac',
      ],
    },
  ];
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
        <div className="mb-18 text-primary-dark">
          <p className="mb-2">
            團隊集結物理治療師、運動防護員、運動醫學肌力與體能教練，不同專業領域的我們，對於健康有著共通的理念。
          </p>
          <p>
            透過「動作健康360」品牌，帶給大家「動作健康」這門全新的科學概念，讓大家找回生活的動力、動作的熱情，實現「要活就要動，要動就要動的健康」。
          </p>
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
        {currentMember && (
        <dialog className="rounded position-fixed top-0 bottom-0 left-0 right-0 p-5 d-flex align-items-center z-1000   ">
          <MemberCardComponent member={currentMember} getMemberName={getMemberName} isOpen />
        </dialog>
        )}
      </PageContainerComponent>
    </DocumentTitle>
  );
}

export default AboutUsPage;
