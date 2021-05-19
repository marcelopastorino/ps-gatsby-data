query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          conferenceName
          date
          location
          talkName
          url
          description
        }
      }
    }
  }
}