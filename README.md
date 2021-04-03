# Consuming Data with GatsbyJS Repository

Source code for Consuming Data with GatsbyJS Pluralsight Course by Marcelo Pastorino.

## Code Snippets

Code snippets used throughout the course.

### Snippet 01

```javscript
query MyQuery {
  posts {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
```

### Snippet 02

```javscript
{
  resolve: 'gatsby-source-wordpress',
  options: {
    url: 'http://your-wordpress-url/graphql'
  }
}
```

### Snippet 03

```javscript
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
```

### Snippet 04

```javscript
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
```

### Snippet 05

```javscript
{data.allWpPost.nodes.map((node) => (
  <Article id={node.id}
    to={node.slug}
    keywords={node.categories.nodes.name}
    title={node.title}
    date={node.date}
    excerpt={node.excerpt} />
))}
```

### Snippet 06

```javscript
allWpPost(sort: {fields: [date]}) {
  nodes {
    slug
  }
}
```

### Snippet 07

```javscript
result.data.allWpPost.nodes.forEach((node) => {
  createPage({
    path: node.slug,
    component: path.resolve('./src/templates/post.js'),
    context: {
      slug: node.slug,
    },
  })
})
```

### Snippet 08

```javscript
const post = data.allWpPost.nodes[0]
```

### Snippet 09

```javscript
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
```

### Snippet 10

```javscript
'gatsby-transformer-sharp',
'gatsby-plugin-sharp'
```

### Snippet 11

```javscript
imageUrl={node.featuredImage.node.sourceUrl}
```

### Snippet 12

```javscript
<img src={props.imageUrl} alt={props.title} width="150px" height="160px" />
```

### Snippet 13

```javscript
localFile {
    childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
        }
    }
}
```

### Snippet 14

```javscript
const image = data.allWpPost.nodes[0].featuredImage.node.localFile.childImageSharp.fluid
```

### Snippet 15

```javscript
<Img fluid={image} key={image.src} />
```