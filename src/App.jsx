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

const bodyMovementCheckImg = '/Massage-therapist-bro.svg';
const movementTrainingImg = '/Coach-bro.svg';
const professionalTrainingImg = '/Lesson-bro.svg';
const educationalPromotionImg = '/Mobile-Marketing-bro.svg';

function App() {
  const servicesList = [
    {
      name: '全身動作健康測試檢查服務',
      img: bodyMovementCheckImg,
      id: uuidv4(),
      descriptions: [
        '受傷後我還是想打球、長期久坐腰很酸？身體感覺越來越不聽使喚，到底怎麼了？',
        '【動作健康360】有國家認證的物理治療師，與運動傷害防護員，透過 1 對 1 評估與融合徒手與運動的治療介入，讓你找回身體的自主權。',
      ],
      enable: true,
      link: 'https://docs.google.com/forms/d/1f2BP0ELQ-zGpdrLrSgi_uvgBAN1htfA1j5UQOysIVRU/viewform?edit_requested=true',
    },
    {
      name: '動作訓練課程',
      img: movementTrainingImg,
      id: uuidv4(),
      descriptions: [
        '抵抗老化，你需要「運動」。找回健康漂亮體態，你需要「運動」。想要在球場上衝鋒達陣，你需要「運動」。但到底什麼運動可以幫助我？',
        '【動作健康360】有國際認證的肌力體能教練與各式專項運動教練。不論你想要達成什麼目標，讓我們來幫助你。',
      ],
      enable: false,
      link: '',
    },
    {
      name: '動作科學系列之專業人員繼續教育課程',
      img: professionalTrainingImg,
      id: uuidv4(),
      descriptions: ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat cupiditate a vel tempore explicabo? Itaque unde nihil natus laboriosam commodi perspiciatis deleniti minima quibusdam ipsam libero error ut adipisci doloremque sit, optio temporibus rerum amet autem numquam totam aliquid ratione sequi? Hic placeat doloremque tempora qui sit labore eos possimus nobis dolor atque dolorum totam, perferendis accusamus? Explicabo, eligendi amet!'],
      enable: false,
      link: '',
    },
    {
      name: '動作科學民眾衛教講堂',
      img: educationalPromotionImg,
      id: uuidv4(),
      descriptions: [
        '【動作健康360】不僅要教你什麼動，更要教你如何「聰明的動」。將各式艱澀的醫學與運動科學，幫你轉換成最簡單的白話文，帶你重新認識自己的身體。',
      ],
      enable: false,
      link: '',
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
            <Route path="/service" element={<ServicePage servicesList={servicesList} />} />
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
