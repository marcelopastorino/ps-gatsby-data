exports.githubApiQuery = `
  query ($query: String!, $first: Int) {
    search(query: $query, type: REPOSITORY, first: $first) {
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
`