export const githubQuery = graphql`
query GitHubQuery {
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
`