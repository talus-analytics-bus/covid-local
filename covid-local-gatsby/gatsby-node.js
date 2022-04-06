/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allAirtable(filter: { data: { publishing_status: { eq: "Publish" } } }) {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // printing out paths to make it easy to copy / paste for the invalidation
  // console.log('blog post paths')
  result.data.allAirtable.edges.forEach(({ node }) => {
    // console.log('"' + node.data.slug + 'index.html' + '" \\')
    // console.log('"' + node.data.slug + '" \\')
    createPage({
      path: node.data.slug,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
  })
}
