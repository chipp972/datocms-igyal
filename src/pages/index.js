import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ProfilePic } from '../components/profile-pic/profile-pic';
import { AgendaDate } from '../components/agenda-date/agenda-date';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { StripeCheckoutButton } from '../components/stripe-checkout/stripe-checkout-button';
import '../style/index.scss';
import { BodyContent } from '../components/body-content';

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
    body: datoCmsBody {
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
        ... on DatoCmsMailForm {
          id
          model {
            apiKey
          }
          backgroundColor {
            hex
          }
          title
          description
          lastnameLabel
          firstnameLabel
          emailLabel
          buttonLabel
          errorMessage
          invalidEmailErrorMessage
          successMessage
        }
      }
    }
    schedule: datoCmsScheduleSection {
      backgroundColor {
        hex
      }
      title
      schedule {
        id
        date
        title
        description
        backgroundColor {
          hex
        }
      }
    }
    people: datoCmsPeopleSection {
      backgroundColor {
        hex
      }
      peopleList {
        id
        photo {
          fluid(
            maxWidth: 500
            forceBlurhash: false
            imgixParams: {
              fm: "jpg"
              auto: "compress"
              fit: "crop"
              crop: "focalpoint"
              w: "500"
              h: "500"
            }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        name
        title
      }
      titre
    }
    payment: datoCmsPaymentSection {
      text
    }
    config: site {
      siteMetadata {
        stripePublicKey
      }
    }
    products: allStripeProduct {
      edges {
        node {
          id
          active
          description
          name
          default_price
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

const Home = ({ data }) => {
  return (
    <main className="Container">
      <Header {...data.header} />
      <BodyContent {...data.body} />
      {/* Agenda */}
      <section
        style={{ backgroundColor: data.schedule.backgroundColor.hex }}
        className="SectionContent"
      >
        <div className="Wrap">
          <h2 className="headline">{data.schedule.title}</h2>
          <div className="Catalogue agenda_content">
            {data.schedule.schedule.map(({ id, ...scheduleProps }) => (
              <AgendaDate key={id} {...scheduleProps} />
            ))}
          </div>
        </div>
      </section>
      {/* Intervenantes */}
      <section
        style={{ backgroundColor: data.people.backgroundColor.hex }}
        className="SectionContent"
      >
        <div className="Wrap">
          <h2 style={{ textAlign: 'center' }} className="headline alternative">
            {data.people.titre}
          </h2>
          <div className="Catalogue">
            {data.people.peopleList.map(({ id, photo, name, title }) => (
              <div className="Catalogue__item" key={id}>
                <ProfilePic key={id} image={photo} name={name} title={title} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Payment */}
      <section className="SectionContent">
        <div className="Wrap">
          <div>
            <div className="richText" dangerouslySetInnerHTML={{ __html: data.payment.text }} />
          </div>
          <ul style={{display: 'grid', gridGap: '10px'}}>
            {data.products.edges
              .filter(({ node: { active } }) => active)
              .map(({ node }) => (
                <li key={node.id}>
                  <StripeCheckoutButton
                    {...node}
                    stripePublicKey={data.config.siteMetadata.stripePublicKey}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
      <Footer {...data.footer} />
    </main>
  );
};

Home.propTypes = {
  data: PropTypes.object
};

export default Home;

export { Head } from '../components/head/head';
