import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
  const { site } = useStaticQuery(query);

  const {
    title,
    titleTemplate,
    description,
    url,
    image,
    twitterUsername,
  } = site.siteMetadata;

  const seo = { title, description, image, url };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        url
        image
        twitterUsername
      }
    }
  }
`;
