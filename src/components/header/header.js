import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './Header.scss';

export const Header = ({ data }) => (
  <header className="Header">
    <div className="Wrap">
      <div className="Header__body">
        <h1 className="Header__title">
          <Link data-text={data.site.siteMetadata.siteName} to="/">
            {data.site.siteMetadata.siteName}
          </Link>
        </h1>
        <div className="Header__summary snipcart-summary snipcart-checkout">
          <div className="Header__summary__title">🛍 MY CART 🛍</div>
          <div className="Header__summary__line">
            Number of items: <span className="snipcart-total-items"></span>
          </div>
          <div className="Header__summary__line">
            Total price: <span className="snipcart-total-price"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  data: PropTypes.object
};
