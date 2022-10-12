const path = require(`path`)

//https://www.gatsbyjs.com/docs/how-to/routing/mdx/#programmatically-creating-pages

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const skillsTemplate = path.resolve(`src/templates/skills-template.tsx`)

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            path
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.path,
      component: `${skillsTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}
