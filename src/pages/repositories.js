import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import styles from './repositories.module.scss';
import Stars from '../components/stars'

export default ({ data }) => (
    <Layout>
        <Title text='Repositories' />
        <div>
            {data.allGithubData.edges[0].node.data.search.edges.map(({ node }) => (
                <div className={styles.repository}>
                    <div className={styles.name}><a href={node.url}>pluralsight\{node.name}</a>
                    <Stars className={styles.stars} repoName={node.name} />
                    </div>
                    <div className={styles.description}>{node.description}</div>
                </div>
            ))}
        </div>
    </Layout>
)

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