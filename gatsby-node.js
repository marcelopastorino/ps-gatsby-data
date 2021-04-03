const path = require('path')

// Create post pages programmatically
exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions

   return new Promise(resolve => {
      graphql(`
      {
         allWpPost(sort: {fields: [date]}) {
            nodes {
              slug
            }
          }
      }`
      ).then(result => {
         result.data.allWpPost.nodes.forEach((node) => {
            createPage({
               path: node.slug,
               component: path.resolve('./src/templates/post.js'),
               context: {
                  slug: node.slug,
               },
            })
         })
         resolve()
      })
   })
}