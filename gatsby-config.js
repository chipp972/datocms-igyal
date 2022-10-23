require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'iGyal'
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
    'gatsby-plugin-netlify'
  ]
};
