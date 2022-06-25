// footer which show on bottom of every pages
import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfoComponent from './contact-info-component';
import NavListComponent from './nav-list-component';
import MediaLinkComponent from './media-link-component';
import LogoWordComponent from './logo-word-component';
import Copyright from './copyright-component';

function FooterComponent() {
  return (
    <div>
      {/* contact */}
      {/* footer */}
      <div className="bg-primary-dark py-20">
        <div className="container">
          <div className="d-flex justify-content-end mb-4 mb-lg-16">
            <Link to="/">
              <LogoWordComponent isWhite />
            </Link>
          </div>
          <div className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-lg-end">
            <div>
              <MediaLinkComponent />
              <ContactInfoComponent fontSizeClasses="fs-h5" />
            </div>
            <NavListComponent textColor="white" />
          </div>
          <Copyright />

        </div>
      </div>

    </div>
  );
}

export default FooterComponent;
