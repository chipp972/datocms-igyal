require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'iGyal',
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-stripe',
      options: {
        objects: ['Price', 'PaymentIntent'],
        secretKey: process.env.STRIPE_API_KEY
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_LIST_URL
      }
    },
    'gatsby-plugin-netlify'
  ]
};
