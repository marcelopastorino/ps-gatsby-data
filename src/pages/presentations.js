import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import styles from './presentations.module.scss';

export default ({data}) => (
    <Layout>
        <Title text='Presentations' />
        <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className={styles.presentation}>
                    <div className={styles.title}><a href={node.frontmatter.url}>{node.frontmatter.talkName}</a></div>
                    <div className={styles.conferenceName}>{node.frontmatter.conferenceName}</div>
                    <div className={styles.conferenceLocation}>At {node.frontmatter.location} on {new Date(node.frontmatter.date).toDateString()}</div>
                    <div className={styles.description}>{node.frontmatter.description}</div>
                </div>
            ))}

        </div>
    </Layout>
)

export const query = graphql`
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
`