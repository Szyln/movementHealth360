import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavComponent from './components/nav-component';
// import NavComponent2 from './components/nav-component2';
import FooterComponent from './components/footer-component';
import Homepage from './pages/homepage-page';
import AboutUsPage from './pages/about-us-page';
import ContactPage from './pages/contact-page';
import ServicePage from './pages/service-page';

const bodyMovementCheckImg = '../src/img/secondary/Massage-therapist-bro.svg';
const movementTrainingImg = '../src/img/secondary/Coach-bro.svg';
const professionalTrainingImg = '../src/img/secondary/Lesson-bro.svg';
const educationalPromotionImg = '../src/img/secondary/Mobile-Marketing-bro.svg';

function App() {
  const servicesList = [
    {
      name: '全身動作健康測試檢查服務',
      img: bodyMovementCheckImg,
      id: uuidv4(),
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat cupiditate a vel tempore explicabo? Itaque unde nihil natus laboriosam commodi perspiciatis deleniti minima quibusdam ipsam libero error ut adipisci doloremque sit, optio temporibus rerum amet autem numquam totam aliquid ratione sequi? Hic placeat doloremque tempora qui sit labore eos possimus nobis dolor atque dolorum totam, perferendis accusamus? Explicabo, eligendi amet!',
      enable: true,
    },
    {
      name: '動作訓練課程',
      img: movementTrainingImg,
      id: uuidv4(),
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat cupiditate a vel tempore explicabo? Itaque unde nihil natus laboriosam commodi perspiciatis deleniti minima quibusdam ipsam libero error ut adipisci doloremque sit, optio temporibus rerum amet autem numquam totam aliquid ratione sequi? Hic placeat doloremque tempora qui sit labore eos possimus nobis dolor atque dolorum totam, perferendis accusamus? Explicabo, eligendi amet!',
      enable: false,
    },
    {
      name: '動作科學系列之專業人員繼續教育課程',
      img: professionalTrainingImg,
      id: uuidv4(),
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat cupiditate a vel tempore explicabo? Itaque unde nihil natus laboriosam commodi perspiciatis deleniti minima quibusdam ipsam libero error ut adipisci doloremque sit, optio temporibus rerum amet autem numquam totam aliquid ratione sequi? Hic placeat doloremque tempora qui sit labore eos possimus nobis dolor atque dolorum totam, perferendis accusamus? Explicabo, eligendi amet!',
      enable: false,
    },
    {
      name: '動作科學民眾衛教講堂',
      img: educationalPromotionImg,
      id: uuidv4(),
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat cupiditate a vel tempore explicabo? Itaque unde nihil natus laboriosam commodi perspiciatis deleniti minima quibusdam ipsam libero error ut adipisci doloremque sit, optio temporibus rerum amet autem numquam totam aliquid ratione sequi? Hic placeat doloremque tempora qui sit labore eos possimus nobis dolor atque dolorum totam, perferendis accusamus? Explicabo, eligendi amet!',
      enable: false,
    },
  ];
  return (
    <div className="App">
      <header>
        <NavComponent />
      </header>
      <main>
        <Routes>
          {/* Route 決定點連結之後會產生的內容 */}
          <Route path="/" element={<Homepage servicesList={servicesList} />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage servicesList={servicesList} />} />
        </Routes>
      </main>
      {/* 使用 Routes 包住 Route */}
      <FooterComponent />
      <p>待辦：link 的 hover 動畫、怎麼串ig、TA那塊的動畫、</p>
    </div>
  );
}

export default App;
