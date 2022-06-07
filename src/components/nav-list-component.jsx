// import gsap from 'gsap';
import React from 'react';
import { Link } from 'react-router-dom';

function NavListComponent({ textColor = 'primary', fontSizeClass = 'fs-h5', isTextEnd = true }) {
  const navListItems = [
    {
      name: '來體驗',
      route: '/service/category',
    },
    {
      name: '學動作',
      route: '/about/movementHealth',
    },
    {
      name: '我們！',
      route: '/about',
    },
    {
      name: '聯絡我們',
      route: '/contact',
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
          <li key={navListItem.route} className="py-2">
            <Link to={navListItem.route} className={`${fontSizeClass} text-decoration-none text-${textColor} letter-space-lg hover-nav-link`}>{navListItem.name}</Link>
          </li>
        ))
      }
    </ul>
  );
}

export default NavListComponent;
