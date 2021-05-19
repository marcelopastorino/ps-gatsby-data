query githubQuery{
  allGithubData {
    edges {
      node {
        data {
          search {
            edges {
              node {
                name
                url
                description
                stargazerCount
              }
            }
          }
        }
      }
    }
  }
}