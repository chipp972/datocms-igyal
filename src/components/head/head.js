import React from 'react';
import PropTypes from 'prop-types';

export const Head = ({ data }) => (
  <>
    <title>{data.header.title}</title>
    <meta name="description" content={data.header.subtitle} />
    {data.site.faviconMetaTags.tags.map(({ attributes }, index) => (
      <link key={index} {...attributes} />
    ))}
    <meta property="og:title" content={data.site.globalSeo.title} />
    <meta property="og:image" content={data.site.globalSeo.fallbackSeo.image.url} />
    <meta property="og:site_name" content={data.site.globalSeo.siteName} />
    <meta property="og:description" content={data.site.globalSeo.fallbackSeo.description} />
    <meta property="fb:page_id" content="100070726574495" />
  </>
);

Head.propTypes = {
  data: PropTypes.object
};
