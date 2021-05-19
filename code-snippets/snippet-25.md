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