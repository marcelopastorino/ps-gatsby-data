import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Title from '../components/title'
import styles from './post.module.scss'
import Img from 'gatsby-image'

export default ({ data }) => {
  const post = data.allWpPost.nodes[0]
  const image = data.allWpPost.nodes[0].featuredImage.node.localFile.childImageSharp.fluid
  return (
    <Layout>
      <div className={styles.container}>
        <Title text={post.title}></Title>
        <Img fluid={image} key={image.src} />
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`