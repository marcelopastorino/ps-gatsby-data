query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
        nodes {
            title
            content
            featuredImage {
                node {
                    sourceUrl
                }
            }
        }
    }
}