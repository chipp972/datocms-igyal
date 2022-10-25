import React from 'react';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import './checkout-button.scss';

export const StripeCheckoutButton = ({ stripePublicKey, name, default_price }) => {
  const stripePromise = React.useRef(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    stripePromise.current = loadStripe(stripePublicKey);
  }, []);

  const handleClick = async () => {
    const stripe = await stripePromise.current;
    const result = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: default_price,
          quantity: 1
        }
      ],
      mode: 'payment',
      successUrl: `${location.origin}/felicitations`,
      cancelUrl: location.origin
    });

    console.log(result);
    result.error && setError(result.error);
  };

  return (
    <>
      <button className="checkoutButton" role="link" onClick={handleClick}>
        {name}
      </button>
      {error && <div className="error">{error.message}</div>}
    </>
  );
};

StripeCheckoutButton.propTypes = {
  stripePublicKey: PropTypes.string.isRequired,
  default_price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
