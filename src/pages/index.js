import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ProfilePic } from '../components/profile-pic/profile-pic';
import { AgendaDate } from '../components/agenda-date/agenda-date';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { MailForm } from '../components/mail-form/mail-form';
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
          maxHeight: 500,
          imgixParams: {
            fm: "jpg",
            fit: "crop",
            crop: "focalpoint",
            w: "2400",
            h: "1000"
          }
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
        ...on DatoCmsBlocDeText {
          id
          model {
            apiKey
          }
          backgroundColor {
            hex
          }
          content
        }
        ...on DatoCmsMailForm {
          id
          model {
            apiKey
          }
          backgroundColor {
            hex
          }
          lastnamePlaceholder
          lastnameLabel
          firstnamePlaceholder
          firstnameLabel
          emailPlaceholder
          emailLabel
          buttonLabel
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
            maxWidth: 500,
            forceBlurhash: false,
            imgixParams: {
              fm: "jpg",
              auto: "compress"
              fit: "crop",
              crop: "focalpoint"
              w: "500",
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

const Home = ({ data }) => (
  <main className="Container">
    <Header {...data.header} />
    {/* Body */}
    {data.body.content.map(({id, model, backgroundColor, ...sectionProps}) => (
      <section key={id} style={{ backgroundColor: backgroundColor.hex }} className="SectionContent">
        <div className="Wrap">
          {model.apiKey === 'bloc_de_text'
            ? <p className="richText" dangerouslySetInnerHTML={{ __html: sectionProps.content }} />
            : <MailForm {...sectionProps} />}
        </div>
      </section>
    ))}
    {/* Agenda */}
    <section style={{ backgroundColor: data.schedule.backgroundColor.hex }} className="SectionContent">
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
    <section style={{ backgroundColor: data.people.backgroundColor.hex }} className="SectionContent">
      <div className="Wrap">
        <h2 style={{textAlign: 'center'}} className="title">{data.people.titre}</h2>
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
        <p className="richText" dangerouslySetInnerHTML={{ __html: data.payment.text }} />
      </div>
    </section>
    <Footer {...data.footer} />
  </main>
);

Home.propTypes = {
  data: PropTypes.object
};

export default Home;

export { Head } from '../components/head/head';
