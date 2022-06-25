import React from 'react';
import PropTypes from 'prop-types';

import ContactInfoItemComponent from './contact-info-item-component';

function ContactInfoComponent({ fontSizeClasses }) {
  return (
    <ul>
      <ContactInfoItemComponent hrefType="mailto" bsIconName="envelope-fill" fontSizeClasses={fontSizeClasses}>movementhealth360@gmail.com</ContactInfoItemComponent>
    </ul>
  );
}
ContactInfoComponent.propTypes = {
  fontSizeClasses: PropTypes.string,

};
ContactInfoComponent.defaultProps = {
  fontSizeClasses: 'fs-lg-h4 fs-small',
};

export default ContactInfoComponent;
