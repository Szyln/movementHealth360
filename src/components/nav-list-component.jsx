import React from 'react';
import { Link } from 'react-router-dom';

function NavListComponent({ textColor = 'primary', fontSizeClass = 'fs-h5', isTextEnd = true }) {
  const navListItems = [
    {
      name: '來體驗',
      route: 'service',
    },
    {
      name: '學動作',
      route: '',
    },
    {
      name: '我們！',
      route: 'about',
    },
    {
      name: '聯絡我們',
      route: 'contact',
    },
  ];
  return (
    <ul className={`text${isTextEnd ? '-end' : '-start'}`}>
      {
        navListItems.map((navListItem) => (
          <li key={navListItem.route} className="py-1 py-lg-2">
            <Link to={`/${navListItem.route}`} className={`${fontSizeClass} text-decoration-none text-${textColor} letter-space-lg`}>{navListItem.name}</Link>
          </li>
        ))
      }

    </ul>
  );
}

export default NavListComponent;
