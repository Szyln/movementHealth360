// Navbar with toggle on/off which always fixed on window

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavListComponent from './nav-list-component';
import MediaLinkComponent from './media-link-component';
import ContactInfoComponent from './contact-info-component';
import Copyright from './copyright-component';
import LogoWordComponent from './logo-word-component';

const iconColor = '../../src/icon-2color.svg';
const navToggleBtn = '../../src/img/nav-toggle-button.svg';

function NavComponent() {
  const [navToggle, setNavToggle] = useState(false);
  const toggleNavBtnHandler = () => {
    if (navToggle === false) {
      setNavToggle(true);
    } else {
      setNavToggle(false);
    }
  };

  return (
    <nav
      className={`${navToggle ? 'h-100p bg-primary-dark ' : ''}  position-fixed w-100p z-3000 ${navToggle ? 'py-4 py-md-10 py-lg-20' : 'pt-3 pt-md-10 pt-lg-20'}`}
    >
      <div className="container h-100p d-flex flex-column justify-content-between">
        {/* navbar */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/">
              <img className="h-10 h-md-20" src={iconColor} alt="icon of logo, an energetic green man." />
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <div className="pe-5">
              <LogoWordComponent heightClass="h-7 h-md-10" isWhite={!!navToggle} />
            </div>
            <div>
              <button type="button" className="border-start border-primary p-2 p-md-5 hover-bg-primary" onClick={toggleNavBtnHandler}>
                <img className="h-4" src={navToggleBtn} alt="動作健康360 motion health 360" />
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
