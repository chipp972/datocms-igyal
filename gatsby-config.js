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
        objects: ['Product', 'PaymentIntent'],
        secretKey: process.env.STRIPE_API_KEY
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us4.list-manage.com/subscribe/post?u=92b9840ffe62904da4a9f0602&amp;id=b8cfdce44e&amp;f_id=0022dce8f0'
      }
    },
    'gatsby-plugin-netlify'
  ]
};
