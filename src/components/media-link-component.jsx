import React from 'react';

function MediaLinkComponent({
  isFlexColumn = false, theme = 'gray-light', showId = false, isSmall = false,
}) {
  const mediaLinks = [
    {
      name: 'instagram',
      id: 'movement_health360',
      address: 'https://www.instagram.com/movement_health360/',
    },
    {
      name: 'medium',
      id: 'https://movementhealth360.medium.com/',
      address: 'https://movementhealth360.medium.com/',
    },
    {
      name: 'facebook',
      id: '@movementhealth360',
      address: 'https://www.facebook.com/movementhealth360',
    },
  ];
  return (
    <ul className={`d-flex ${isFlexColumn ? 'flex-column' : ''}  m${isFlexColumn ? 'e' : 's'}-n3`}>
      {mediaLinks.map((mediaLink) => (
        <li key={mediaLink.name}>
          <a href={mediaLink.address} aria-label={`Link to ${mediaLink.name}`} className={`p${isFlexColumn ? 'y' : 'x'}-${isSmall ? '1' : '3'} d-flex align-items-center text-primary-dark`}>
            <i className={`bi bi-${mediaLink.name} text-${theme}  fs-h3 ${showId && 'me-3'}`} />
            <span className="text-truncate">
              {showId && mediaLink.id}

            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MediaLinkComponent;
