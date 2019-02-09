module.exports = {
  siteMetadata: {
    title: "Cazamundo",
    author: "Easybird",
    description: "Combining our passions in one company",
    keywords: "Software development, Cazamundo, Easybird, Atelier VogelVrij, Goudsmid"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/globe-favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58109113-6"
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
