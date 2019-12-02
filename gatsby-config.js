const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
})

module.exports = {
  siteMetadata: {
    title: `philmirez.com`,
    description: `Full Stack Developer Phil Ramirez`,
    name: `Phil Ramirez`,
    author: `@philmirez`,
    siteTitle: `philmirez.com`,
    siteTitleAlt: `Cara - @lekoarts/gatsby-theme-cara`,
    siteHeadline: `Phil Ramirez - Software Engineer from D.C.`,
    siteUrl: `https://www.philmirez.com`,
    siteDescription: `Portfolio for Phil Ramirez`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1B2B34`,
        theme_color: `#1B2B34`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        typeName: `Json`,
        path: `src/components`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        cookieDomain: "philmirez.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`
  ],
};
