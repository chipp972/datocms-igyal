import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@chipp972/form-validation';
import { InputText } from './input';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import './mail-form.scss';

export const MailForm = ({
  id,
  title,
  description,
  lastnameLabel,
  firstnameLabel,
  emailLabel,
  buttonLabel,
  errorMessage,
  invalidEmailErrorMessage,
  successMessage,
  isSuccessMessageVisible,
  setIsSuccessMessageVisible
}) => {
  const [emailErrorMessageVisible, setEmailErrorMessageVisible] = React.useState(false);

  return isSuccessMessageVisible ? (
    <div className="richText" dangerouslySetInnerHTML={{ __html: successMessage }} />
  ) : (
    <Form
      id={id}
      className="mailForm"
      onValidationSuccess={async (formData) => {
        const result = await addToMailchimp(formData.email, {
          FNAME: formData.firstname,
          LNAME: formData.lastname
        });

        setIsSuccessMessageVisible(result.result === 'success');
        setEmailErrorMessageVisible(result.result === 'error');
      }}
    >
      <section className="text">
        {title && (
          <h2 style={{ textAlign: 'center' }} className="highlightedText">
            {title}
          </h2>
        )}
        {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      </section>
      <section className="form">
        <InputText name="firstname" placeholder={firstnameLabel} errorMessage={errorMessage} />
        <InputText name="lastname" placeholder={lastnameLabel} errorMessage={errorMessage} />
        <InputText name="email" placeholder={emailLabel} errorMessage={errorMessage} />
        {emailErrorMessageVisible && <div className="error">{invalidEmailErrorMessage}</div>}
        <button
          type="button"
          onClick={() => document.querySelector(`#${id}`).requestSubmit()}
          className="button"
        >
          {buttonLabel}
        </button>
      </section>
    </Form>
  );
};

MailForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  lastnameLabel: PropTypes.string.isRequired,
  firstnameLabel: PropTypes.string.isRequired,
  emailLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  invalidEmailErrorMessage: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
  setIsSuccessMessageVisible: PropTypes.func.isRequired,
  isSuccessMessageVisible: PropTypes.bool.isRequired
};
