{data.allGithubData.edges[0].node.data.search.edges.map(({ node }) => (
  <div className={styles.repository}>
    <div className={styles.name}><a href={node.url}>pluralsight\{node.name}</a> 
      <span className={styles.stars}> ( has {node.stargazerCount} stars )</span>
    </div>
    <div className={styles.description}>{node.description}</div>
  </div>
))}