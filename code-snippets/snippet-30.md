{
  search(query: "is:public user:pluralsight language:javascript", type: REPOSITORY, first: 100) {
    edges {
      node {
        ... on Repository {
          name
          url
          description
          stargazerCount
        }
      }
    }
  }
}