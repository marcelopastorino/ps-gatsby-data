import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Article from '../components/article'

export default () => (
   <StaticQuery

      query={graphql`query {
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
       }`

      }

      render={data => (
         <div>
            {data.allWpPost.nodes.map((node) => (
               <Article id={node.id}
                  to={node.slug}
                  keywords={node.categories.nodes.name}
                  title={node.title}
                  date={node.date}
                  excerpt={node.excerpt} 
                  imageUrl={node.featuredImage.node.sourceUrl} />
            ))}
         </div>
      )}

   />
)