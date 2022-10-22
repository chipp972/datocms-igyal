import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ProfilePic } from '../components/profile-pic/profile-pic';
import { AgendaDate } from '../components/agenda-date/agenda-date';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
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
        fluid(maxHeight: 500, imgixParams: { fm: "jpg" }) {
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
      backgroundColor {
        hex
      }
      content
    }
    people: datoCmsPeopleSection {
      backgroundColor {
        hex
      }
      peopleList {
        id
        photo {
          fluid(maxWidth: 500, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress" }) {
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
    <section style={{ backgroundColor: data.body.backgroundColor.hex }} className="Wrap">
      <p dangerouslySetInnerHTML={{ __html: data.body.content }} />
    </section>
    <section className="Wrap">
      <h2 className="headline">Agenda</h2>
      <div className="Catalogue agenda_content">
        <AgendaDate
          date="5 Nov"
          title="Ma modèle sur mesure"
          description="Comment être une Femme inspirée et inspirante au quotidien ."
          bottomLine="Avec Haiha, Coach en image"
        />
        <AgendaDate
          date="6 Nov"
          title="Confiance et estime de soi"
          description="Comment avoir confiance en toi et te valoriser, malgré la peur et les doutes ?"
          bottomLine="Avec Aurélie, Coach de Vie"
          isOrange
        />
        <AgendaDate
          date="19 Nov"
          title="Couleurs et énergies"
          description="Comment exercer ton pouvoir d'attraction grâce aux couleurs ?"
          bottomLine="Avec Naïka, Lithothérapeute"
        />
        <AgendaDate
          date="20 Nov"
          title="Colorimétrie et morphologie"
          description="Comment te sublimer avec style, authenticité et sans frustration ?"
          bottomLine="Avec Haiha, Coach en image"
          isOrange
        />
      </div>
    </section>
    <section style={{ backgroundColor: data.people.backgroundColor.hex }} className="Wrap">
      <h2 className="title">{data.people.titre}</h2>
      <div className="Catalogue">
        {data.people.peopleList.map(({ id, photo, name, title }) => (
          <div className="Catalogue__item" key={id}>
            <ProfilePic key={id} image={photo} name={name} title={title} />
          </div>
        ))}
      </div>
    </section>
    <section style={{ backgroundColor: data.people.backgroundColor.hex }} className="Wrap">
      <p dangerouslySetInnerHTML={{ __html: data.payment.text }} />
    </section>
    <Footer {...data.footer} />
  </main>
);

Home.propTypes = {
  data: PropTypes.object
};

export default Home;

export { Head } from '../components/head/head';
