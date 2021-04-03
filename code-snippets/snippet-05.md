{data.allWpPost.nodes.map((node) => (
  <Article id={node.id}
    to={node.slug}
    keywords={node.categories.nodes.name}
    title={node.title}
    date={node.date}
    excerpt={node.excerpt} />
))}