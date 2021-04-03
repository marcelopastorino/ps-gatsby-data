result.data.allWpPost.nodes.forEach((node) => {
  createPage({
    path: node.slug,
    component: path.resolve('./src/templates/post.js'),
    context: {
      slug: node.slug,
    },
  })
})