import React from 'react';

function MediaLinkComponent({ isFlexColumn = false }) {
  const mediaLinks = [
    {
      name: 'instagram',
      address: 'www.instagram.com',
    },
    {
      name: 'medium',
      address: 'www.medium.com',
    },
    {
      name: 'facebook',
      address: 'www.facebook.com',
    },
  ];
  return (
    <ul className={`d-flex ${isFlexColumn ? 'flex-column' : ''}  m${isFlexColumn ? 'e' : 's'}-n3`}>
      {mediaLinks.map((mediaLink) => (
        <li key={mediaLink.name}>
          <a href={mediaLink.address} aria-label={`Link to ${mediaLink.name}`} className={`p${isFlexColumn ? 'y' : 'x'}-3`}>
            <i className={`bi bi-${mediaLink.name} text-gray-light fs-lg-h2 fs-h3`} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MediaLinkComponent;
