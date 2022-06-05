import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DocumentTitle from 'react-document-title';
import NavComponent from './components/nav-component';
// import NavComponent2 from './components/nav-component2';
import FooterComponent from './components/footer-component';
import Homepage from './pages/homepage-page';
import AboutUsPage from './pages/about-us-page';
import ContactPage from './pages/contact-page';
import ServicePage from './pages/service-page';
import ServiceProductPage from './pages/service-product-page';

const bodyMovementCheckImg = '/Massage-therapist-bro.svg';
const movementTrainingImg = '/Coach-bro.svg';
const professionalTrainingImg = '/Lesson-bro.svg';
const educationalPromotionImg = '/Mobile-Marketing-bro.svg';

function App() {
  const servicesList = [
    {
      name: '物理治療（需診斷證明書）',
      category: '找健康',
      id: uuidv4(),
      alert: '需診斷證明書',
      descriptions: [
        '1 對 1 運動治療',
        '1 對 1 徒手治療',
        '1 對 1 整合式身體優化',
      ],
      enable: false,
    },
    {
      name: '1 對 1 全方位動作健康處方',
      category: '找健康',
      id: uuidv4(),
      descriptions: [
        '60 分鐘全身動作健康測試',
        '60 分鐘健康剖析與改善建議',
        '60 分鐘動作健康優化訓練',
      ],
      enable: true,
      link: 'https://docs.google.com/forms/d/1f2BP0ELQ-zGpdrLrSgi_uvgBAN1htfA1j5UQOysIVRU/viewform?edit_requested=true',
    },
    {
      name: '1 對 1 進階動作控制訓練',
      category: '找健康',
      id: uuidv4(),
      descriptions: [''],
      enable: false,
    },
    {
      name: '1 對 1 運動員回場動作健康準備系列',
      category: '找健康',
      id: uuidv4(),
      descriptions: [
        '1 對 1 運動員回場動作健康評估',
        '1 對 1 運動員回場動作健康',
      ],
      enable: false,
    },
    {
      name: '肌力體能動作健康',
      category: '找運動',
      id: uuidv4(),
      descriptions: [],
      enable: false,
    },
    {
      name: '綜合體能動作健康',
      category: '找運動',
      id: uuidv4(),
      descriptions: [],
      enable: false,
      link: '',
    },
    {
      name: '客製化運動系列',
      category: '找運動',
      id: uuidv4(),
      descriptions: [],
      enable: false,
      link: '',
    },
    {
      name: '給所有人的動作健康入門課',

      category: '找知識（入門）',
      id: uuidv4(),
      descriptions: [
        '【360 講堂 - 動作健康初階班：認識動作健康】',
        '【360 講堂 - 動作健康進階班：找回你的動作健康】',
        '【360 講堂 - 辦公族的肩頸動作健康】',
        '【360 講堂 - 櫃哥櫃姐的骨盆下肢動作健康】',
        '【360 講堂 - 坐姿與站姿與動作健康】',
      ],
      enable: false,
      link: '',
    },
    {
      name: '給所有人的肌力體能動作健康課',
      category: '找知識（入門）',
      id: uuidv4(),
      descriptions: [
        '【360 講堂 - 認識人體六大肌力訓練動作】',
        '【360 講堂 - 競技體適能的測試＆訓練 123】',
        '【360 講堂 - 週期化訓練】',
      ],
      enable: false,
      link: '',
    },
    {
      name: '給專業人員的動作進修課',
      category: '找知識（進階）',
      id: uuidv4(),
      descriptions: [
        '【360 講堂 - 進階肌動訓練學肩頸胸椎 Advanced Kinesiological Training: Neck & Shoulder & T-Spine Workshop】',
        '【360 講堂 - 進階肌動訓練學：腰椎骨盆髖 Advanced Kinesiological Training: Low Back & Pelvic & Hip Workshop】',
        '【360 講堂 - 動作診斷與運動治療概論】',
        '【360 講堂 - 動作診斷與運動治療：實作工作坊】',
      ],
      enable: false,
      link: '',
    },
    {
      name: '給專業人員的肌力體能動作健康進修課',
      category: '找知識（進階）',
      id: uuidv4(),
      descriptions: [
        '【360 講堂 - 深蹲動作健康】',
        '【360 講堂 - 硬舉動作健康】',
        '【360 講堂 - 垂直推動作健康】',
        '【360 講堂 - 垂直拉動作健康】',
        '【360 講堂 - 水平推動作健康】',
        '【360 講堂 - 水平拉動作健康】',
        '【360 講堂 - 競技體適能】',
        '【360 講堂 - 週期化訓練】',
      ],
      enable: false,
      link: '',
    },
    {
      name: '給專業人員的綜合體能動作健康進修課',
      category: '找知識（進階）',
      id: uuidv4(),
      descriptions: [
        '【360 講堂 - 挺舉動作健康】',
        '【360 講堂 - 抓舉動作健康】',
        '【360 講堂 - 心肺體能動作健康】',
        '【360 講堂 - 倒立動作健康】',
        '【360 講堂 - 暴力上槓動作健康】',
      ],
      enable: false,
      link: '',
    },
  ];

  const servicesCategories = [
    {
      name: '找健康',
      img: bodyMovementCheckImg,
      descriptions: [
        '受傷後還是想打球、長期久坐腰很酸？',
        '身體感覺越來越不聽使喚，到底怎麼了？',
      ],
      provide: [
        '國家認證的物理治療師、運動傷害防護員',
        '1 對 1 評估',
        '融合徒手與運動的治療介入',
      ],
      // features: [''],
      product: [

      ],
      enable: true,
      hide: false,
    },
    {
      name: '找運動',
      img: movementTrainingImg,
      descriptions: [
        '抵抗老化、找回健康漂亮體態、想要在球場上衝鋒達陣，你需要「運動」，但該要什麼運動才能有效果？',
      ],
      provide: [
        '有國際認證的肌力體能教練與各式專項運動教練。',
        '不論你想要達成什麼目標，讓我們來幫助你。',
      ],
      features: [
        '可選擇 1 對 1 或 2 或團班的授課方式',
        '可線上授課',
        '可量身打造客製化課程（事前洽談）',
      ],
      product: [

      ],
      enable: false,
      hide: false,
    },
    {
      name: '找知識（入門）',
      img: educationalPromotionImg,
      descriptions: [
        '不僅要教你什麼動，更要教你如何「聰明的動」。將各式艱澀的醫學與運動科學，幫你轉換成最簡單的白話文，帶你重新認識自己的身體。',
      ],
      provide: [
        '為無運動經驗或是非運動／醫療相關專業人士開設 ',
        '從民眾衛教、企業演講、團體包班、專業人員繼續教育。',
      ],
      features: [],
      product: [

      ],
      enable: false,
      hide: false,
    },
    {
      name: '找知識（進階）',
      img: professionalTrainingImg,
      descriptions: [
        '教會你在面對客戶、學生、個案時，可以用「動作的方式，解決動作的問題」。',
      ],
      provide: [
        '為無運動經驗或是非運動／醫療相關專業人士開設 ',
        '從民眾衛教、企業演講、團體包班、專業人員繼續教育。',
      ],
      features: [
        '專為運動／醫療相關專業人士開設',
        '高達 200 小時的動作科學研習課程',
        '融合解剖學、肌動學、表體解剖學、神經生理學、動作控制與動作學習。',
      ],
      product: [

      ],
      enable: false,
      hide: false,
    },

  ];
  return (
    <div className="App">
      <header>
        <NavComponent />
      </header>
      <main>
        <DocumentTitle title="動作健康 360">
          <Routes>
            {/* Route 決定點連結之後會產生的內容 */}
            <Route path="/" element={<Homepage servicesList={servicesList} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service/category" element={<ServicePage servicesList={servicesList} servicesCategories={servicesCategories} />} />
            {/* <Route path="/service/product" element={<ServiceProductPage servicesList={servicesList} servicesCategories={servicesCategories} />} /> */}
          </Routes>
        </DocumentTitle>
      </main>
      {/* 使用 Routes 包住 Route */}
      <FooterComponent />
      <p>待辦：怎麼串ig、目前課程的銷售方式？連商場？電話？匯款？</p>
    </div>
  );
}

export default App;
