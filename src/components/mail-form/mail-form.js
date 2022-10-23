import React from 'react';
import PropTypes from 'prop-types';

export const MailForm = (props) => (
  <div>
    MAIL FORM
    {props.lastnameLabel}
    <button>{props.buttonLabel}</button>
  </div>
);

MailForm.propTypes = {
  lastnamePlaceholder: PropTypes.string,
  lastnameLabel: PropTypes.string.isRequired,
  firstnamePlaceholder: PropTypes.string,
  firstnameLabel: PropTypes.string.isRequired,
  emailPlaceholder: PropTypes.string,
  emailLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string
};
