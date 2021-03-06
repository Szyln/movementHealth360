// import gsap from 'gsap';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function NavListComponent({ textColor = 'primary', fontSizeClass = 'fs-h5', isTextEnd = true }) {
  const navListItems = [
    {
      name: '服務',
      route: 'service',
      className: 'service',
    },
    {
      name: '動作健康',
      route: 'about/movementHealth',
      className: 'about-movementHealth',
    },
    {
      name: '理念與團隊',
      route: 'about',
      className: 'about',
    },
    {
      name: '聯絡我們',
      route: 'contact',
      className: 'contact',
    },
  ];
  // const el = useRef();
  // const q = gsap.utils.selector(el);

  // useEffect(() => {
  //   gsap.to(q('.hover-nav-link'), {
  //     x: '+=140',
  //     duration: 10,
  //     stagger: 1,
  //     opacity: 100,
  //   });
  // });
  return (
    <ul className={`text${isTextEnd ? '-end' : '-start'}`}>
      {
        navListItems.map((navListItem) => (
          <li key={uuidv4()} className="py-2">
            <Link to={`/${navListItem.route}`} className={`${fontSizeClass} text-decoration-none text-${textColor} letter-space-lg hover-expand-round hover-animation-start hover hover-nav-link hover-${navListItem.className}`}>
              <span>
                {navListItem.name}
              </span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

// textColor = 'primary', fontSizeClass = 'fs-h5', isTextEnd = true
NavListComponent.propTypes = {
  fontSizeClass: PropTypes.string,
  isTextEnd: PropTypes.bool,
  textColor: PropTypes.string,

};
NavListComponent.defaultProps = {
  fontSizeClass: 'fs-h5',
  textColor: 'primary',
  isTextEnd: true,
};

export default NavListComponent;
