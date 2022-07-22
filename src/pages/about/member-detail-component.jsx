import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function MemberDetailComponent({ title, listOfDetail }) {
  return (
    <div className="mb-8">
      <h4 className="position-sticky top-0 bg-white text-primary fs-h5 border-bottom border-primary mb-5 pb-1">{title}</h4>
      <ul className="mb-n2 px-4">
        { listOfDetail.map((detail) => (
          <li key={uuidv4()} className="list-style-disc fw-normal mb-2 letter-space-sm">{detail}</li>))}
      </ul>
    </div>
  );
}

MemberDetailComponent.propTypes = {
  title: PropTypes.string.isRequired,
  listOfDetail: PropTypes.arrayOf(PropTypes.string),

};

MemberDetailComponent.defaultProps = {
  listOfDetail: [],
};

export default MemberDetailComponent;
