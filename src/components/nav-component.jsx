// Navbar with toggle on/off which always fixed on window

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import gsap from 'gsap';
import NavListComponent from './nav-list-component';
import MediaLinkComponent from './media-link-component';
import ContactInfoComponent from './contact-info-component';
import Copyright from './copyright-component';
import LogoWordComponent from './logo-word-component';

const iconColor = '/icon-2color.svg';
const navToggleBtn = '/nav-toggle-button.svg';
const navToggleBtnWhite = '/nav-toggle-button-white.svg';

function NavComponent() {
  const [navToggle, setNavToggle] = useState(false);
  const toggleNavBtnHandler = () => {
    if (navToggle === false) {
      setNavToggle(true);
    } else {
      setNavToggle(false);
    }
  };
  // const navRef = useState();
  // useEffect(() => {
  //   gsap.from(navRef.current, {
  //     x: '+=100',
  //   });
  // });

  return (
    <nav
      className={`${navToggle ? 'h-100p bg-primary-dark py-3 py-md-10 py-lg-20' : 'pt-3 pt-md-10 pt-lg-20'}  position-fixed w-100p z-3000 `}
    >
      <div className="container h-100p d-flex flex-column justify-content-between">
        {/* navbar */}
        {/* icon */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/" onClick={navToggle ? toggleNavBtnHandler : false}>
              <img className="h-10 h-md-20" src={iconColor} alt="icon of logo, an energetic green man." />
            </Link>
          </div>
          {/* word logo */}
          <div className="d-flex align-items-center">
            <div className={`border-end border-${navToggle ? 'white' : 'primary-dark'}`}>
              <Link to="/" className="pe-4  p-2 d-flex" onClick={navToggle ? toggleNavBtnHandler : false}>
                <LogoWordComponent heightClass="h-7 h-md-10 " isWhite={!!navToggle} />
              </Link>
            </div>
            <div>
              {/* toggle button */}
              <button type="button" className="ms-2 px-1 py-5 py-md-6  hover hover-expand-round hover-animation-start d-flex" onClick={toggleNavBtnHandler}>
                <img className="h-4" src={navToggle ? navToggleBtnWhite : navToggleBtn} alt="動作健康360 motion health 360" />
              </button>

            </div>
          </div>
        </div>
        {navToggle && (
          <>
            <div className="d-flex justify-content-between mb-5 align-items-center" aria-hidden="true" onClick={toggleNavBtnHandler}>
              <MediaLinkComponent isFlexColumn />
              <NavListComponent textColor="gray-light" fontSizeClass="fs-h2" />
            </div>
            <div className="">
              <ContactInfoComponent />
              <Copyright />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavComponent;
