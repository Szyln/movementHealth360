import React from 'react';
import AvatarComponent from './api/avatar-component';

function FeedbackCardComponent({ feedback }) {
  const {
    name, rate, comment, img,
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

export default FeedbackCardComponent;
