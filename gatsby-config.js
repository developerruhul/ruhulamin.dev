module.exports = {
  siteMetadata: {
    title: `Developer Ruhul | Fullstack web developer`,
    titleTemplate: "%s",
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    twitterUsername: `@developerruhul`,
    image: "https://i.imgur.com/VNlq0Oo.png",
    url: "https://ruhulamin.dev",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Developer Ruhul | Fullstack web developer`,
        short_name: `Developer Ruhul`,
        start_url: `/`,
        background_color: `#7C3AED`,
        theme_color: `#7C3AED`,
        display: `minimal-ui`,
        icon: "src/images/developer-ruhul-brand.png"
      },
    }
  ],
};
