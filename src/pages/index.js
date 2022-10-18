import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ProfilePic } from '../components/profile-pic/profile-pic';
import { AgendaDate } from '../components/agenda-date/agenda-date';
import { Helmet } from 'react-helmet';
import { Header } from '../components/header/header';
import clsx from 'clsx';
import '../style/index.scss';

const query = graphql`
  query CatalogueQuery {
    products: allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image {
            url
            sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const Home = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <>
        <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
        <main className="Container">
          <Header data={data} />
          <section className="Wrap">
            <div className="Catalogue">
              {data.products.edges.map(({ node: product }) => (
                <div className="Catalogue__item" key={product.id}>
                  <ProfilePic
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    title={product.price}
                  />
                  {/* <div
                    className="Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url="/"
                  >
                    <div className="Product__image">
                      <Img sizes={product.image.sizes} />
                    </div>{' '}
                    <div className="Product__details">
                      <div className="Product__name">
                        {product.name}
                        <div className="Product__price">{product.price}€</div>
                      </div>
                      <span className="Product__buy">Buy now</span>
                    </div>
                  </div> */}
                </div> 
              ))}
            </div>
            <section className={clsx('agenda_section', 'Wrap')}>
              <h2 className="headline">Agenda</h2>
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
            </section>
          </section>
          <section className="Wrap">
            <div className="Footer">
              This website is just an example project to demonstrate how you can integrate{' '}
              <a href="https://www.gatsbyjs.org/">Gatsby</a>,{' '}
              <a href="https://snipcart.com/">Snipcart</a> and{' '}
              <a href="https://www.datocms.com">DatoCMS</a>.
            </div>
          </section>
        </main>
      </>
    )}
  />
);

export default Home;
