import React from 'react';

import ContactInfoItemComponent from './contact-info-item-component';

function ContactInfoComponent({ fontSizeClasses }) {
  return (
    <ul>
      {/* <ContactInfoItemComponent hrefType="tel" bsIconName="telephone-fill" fontSizeClasses={fontSizeClasses}>0936-360-360</ContactInfoItemComponent> */}
      <ContactInfoItemComponent hrefType="mailto" bsIconName="envelope-fill" fontSizeClasses={fontSizeClasses}>movementhealth360@gmail.com</ContactInfoItemComponent>
    </ul>
  );
}

export default ContactInfoComponent;
