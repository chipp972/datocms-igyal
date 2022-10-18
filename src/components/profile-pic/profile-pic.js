import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import './profile-pic.scss';
import '../../style/text.scss';

export const ProfilePic = ({ name, title, image }) => (
  <div className="profile_pic_container">
    <Img className="profile_pic_circle" {...image} />
    <div className="highlightedText">{name}</div>
    <div>{title}</div>
  </div>
);

ProfilePic.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object
};
