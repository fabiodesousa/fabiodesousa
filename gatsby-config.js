module.exports = {
  siteMetadata: {
    title: 'Fabio De Sousa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tdhz3bkyljz2`,
        accessToken: `a90f8342ac1af2abc42675b977c703a1b71141d2380ab08c2b32f9d4d76f58e4`,
      },
    },
    /*{
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }*/
  ],
}
