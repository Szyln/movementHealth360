import React from 'react';
import PropTypes from 'prop-types';
import AvatarComponent from './api/avatar-component';

function FeedbackCardComponent({ feedback }) {
  const {
    name, rate, comment,
  } = feedback;
  return (
    <div className="border-primary-dark border-around rounded bg-white p-5 d-flex">
      <AvatarComponent name={name} className="h-20 align-self-center" />
      <ul className="ms-5 mt-2 h-30">
        <li>{name}</li>
        <li className="text-accent mb-2">{rate}</li>
        <li className="fw-normal ">{comment}</li>
      </ul>
    </div>
  );
}

FeedbackCardComponent.propTypes = {
  feedback: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,

};

export default FeedbackCardComponent;
