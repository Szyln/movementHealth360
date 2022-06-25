import React from 'react';
import PropTypes from 'prop-types';

function AvatarComponent({ name, className = '' }) {
  return (
    <img src={`https://source.boringavatars.com/beam/${name}?colors=006e5a,004536,97cfac,f29438,cccccc`} alt={`random avatar of ${name}`} className={className} />
  );
}

AvatarComponent.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,

};
AvatarComponent.defaultProps = {
  className: '',
};

export default AvatarComponent;
