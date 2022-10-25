import React from 'react';
import PropTypes from 'prop-types';
import { MailForm } from './mail-form/mail-form';

export const BodyContent = ({ content }) => {
  const [isFormSuccessMessageVisible, setIsFormSuccessMessageVisible] = React.useState(false);
  return (
    <>
      {content.map(({ id, model, backgroundColor, ...sectionProps }) => (
        <section
          key={id}
          style={{ backgroundColor: backgroundColor.hex }}
          className="SectionContent"
        >
          <div className="Wrap">
            {model.apiKey === 'bloc_de_text' ? (
              <div
                className="richText"
                dangerouslySetInnerHTML={{ __html: sectionProps.content }}
              />
            ) : (
              <MailForm
                id={id}
                {...sectionProps}
                isSuccessMessageVisible={isFormSuccessMessageVisible}
                setIsSuccessMessageVisible={setIsFormSuccessMessageVisible}
              />
            )}
          </div>
        </section>
      ))}
    </>
  );
};

BodyContent.propTypes = {
  content: PropTypes.array
};
