{
  resolve: 'gatsby-source-github-api',
  options: {
    token: 'your_access_token_here',
    graphQLQuery: 'graph_ql_query_here',
    variables: {
      query: 'is:public user:pluralsight language:javascript',
      first: 50
    }
  }
}