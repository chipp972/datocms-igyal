require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'iGyal'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-snipcart',
    //   options: {
    //     apiKey: process.env.SNIPCART_API_KEY,
    //     autopop: true
    //   }
    // },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    'gatsby-plugin-netlify'
  ]
};
