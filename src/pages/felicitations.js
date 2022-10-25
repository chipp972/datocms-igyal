import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BodyContent } from '../components/body-content';
import '../style/index.scss';

export const query = graphql`
  query Query {
    site: datoCmsSite {
      globalSeo {
        facebookPageUrl
        siteName
        fallbackSeo {
          description
          image {
            url
          }
          title
        }
      }
      faviconMetaTags {
        tags
      }
    }
    header: datoCmsHeroSection {
      illustration {
        url
        fluid(
          maxHeight: 500
          imgixParams: { lossless: true, fit: "crop", crop: "focalpoint", w: "2400", h: "1000" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      backgroundColor {
        hex
      }
      title
      subtitle
    }
    body: datoCmsSuccessBody {
      content {
        ... on DatoCmsBlocDeText {
          id
          model {
            apiKey
          }
          backgroundColor {
            hex
          }
          content
        }
      }
    }
    footer: datoCmsFooter {
      backgroundColor {
        hex
      }
      image {
        fixed(width: 300, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFixed
        }
      }
      text
      socialMedias {
        id
        icon {
          fixed(width: 64, forceBlurhash: false) {
            ...GatsbyDatoCmsFixed
          }
        }
        label
        url
      }
    }
  }
`;

const SuccessScreen = ({ data }) => (
  <main className="Container">
    <Header {...data.header} />
    <BodyContent {...data.body} />
    <Footer {...data.footer} />
  </main>
);

SuccessScreen.propTypes = {
  data: PropTypes.object
};

export default SuccessScreen;
