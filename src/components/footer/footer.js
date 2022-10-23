import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './footer.scss';

export const Footer = ({ backgroundColor, image, text, socialMedias }) => (
  <footer style={{ backgroundColor: backgroundColor.hex }} className="Wrap">
    <div className="footer">
      <Img className="image" {...image} />
      <section className="description">
        <div className="richText" dangerouslySetInnerHTML={{ __html: text }} />
        <ul className="socialMediaList">
          {socialMedias.map(({ id, icon, label, url }) => (
            <a className="socialMedia" key={id} href={url} target="_blank" rel="noreferrer">
              <Img className="socialMediaIcon" {...icon} />
              {label}
            </a>
          ))}
        </ul>
      </section>
    </div>
  </footer>
);

Footer.propTypes = {
  backgroundColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  image: PropTypes.object,
  text: PropTypes.string,
  socialMedias: PropTypes.array
};
