import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '@chipp972/form-validation';
import './mail-form.scss';

export const InputText = (props) => {
  const { hasError } = useForm(props);
  return (
    <>
      <input
        className="input"
        type="text"
        required
        name={props.name}
        placeholder={props.placeholder}
      />
      {hasError && <div className="error">{props.errorMessage}</div>}
    </>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};
