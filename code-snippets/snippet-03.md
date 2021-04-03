query {
  allWpPost {
    nodes {
      id
      title
      excerpt
      slug
      date(formatString: "MMMM DD, YYYY")
    }
  }
}