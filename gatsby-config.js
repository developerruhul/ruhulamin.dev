module.exports = {
  siteMetadata: {
    title: `Developer Ruhul | Fullstack web developer`,
    titleTemplate: "%s",
    description: `Ruhul is a fullstack web developer with 2 years of experience. He creates outstanding websites and webapps with beautiful and smooth user interfaces but also he's able to develop the backend and then integrate the two(website and API) to create a full blown web application - usually, he does both at the same time. This allows him to build almost any kind of web app or application very quickly.`,
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
        icon: "src/images/developer-ruhul.jpg"
      },
    }
  ],
};
