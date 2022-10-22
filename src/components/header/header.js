import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './Header.scss';

export const Header = ({ illustration, backgroundColor, title, subtitle }) => (
  <header style={{ backgroundColor: backgroundColor.hex }} className="Header">
    <Img className="image" {...illustration} />
    <div className="Wrap">
      <h1>{title}</h1>
      <h2 className="title">{subtitle}</h2>
    </div>
  </header>
);

Header.propTypes = {
  illustration: PropTypes.object,
  backgroundColor: PropTypes.shape({
    hex: PropTypes.string
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string
};
