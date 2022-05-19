import React from 'react';

function AvatarComponent({ name, className = ''}) {
  return (
    <img src={`https://source.boringavatars.com/beam/${name}?colors=006e5a,004536,97cfac,f29438,cccccc`} alt={`random avatar of ${name}`} className={className} />
  );
}

export default AvatarComponent;
