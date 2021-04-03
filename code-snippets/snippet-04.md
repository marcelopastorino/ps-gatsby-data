allWpPost(sort: {fields: [date]}) {
  totalCount
  nodes {
    id
    title
    slug
    date(formatString: "MMMM DD, YYYY")
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories {
      nodes {
        name
      }
    }
    excerpt
  }
}