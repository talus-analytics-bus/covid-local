module.exports = {
  siteMetadata: {
    title: `A Frontline Guide for Local Decision-Makers`,
    description: `A Frontline Guide for Local Decision-Makers Facing The COVID-19 Pandemic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/blog`,
    //     name: 'blog',
    //   },
    // },
    // {
    //   resolve: 'gatsby-transformer-remark',
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources',
      },
    },
    {
      resolve: `gatsby-transformer-csv`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-161498398-1',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appolHuog4LD1xAjJ`,
            tableName: `Table 1`,
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Indicators of Progress',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #1',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #2',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #3',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #4',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #5',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #6',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #7',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Key Objective #8',
            tableView: 'Grid view',
          },
          {
            baseId: 'appc2oaizsxQaNADz',
            tableName: 'Objective Descriptions',
            tableView: 'Grid view',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
