import React from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import Card from "../components/Card"
import { Container } from "./styles"

export default function Home({ data: { allMdx } }) {
  const { nodes } = allMdx
  console.log(nodes, "nodes")

  const handleNavigation = (nav: string) => navigate(nav)

  return (
    <Container>
      {nodes &&
        nodes.map(it => {
          const frontmatter = it.frontmatter
          return (
            <Card
              key={it.id}
              title={frontmatter.title}
              navigation={frontmatter.path}
            />
          )
        })}
    </Container>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          path
          title
        }
        id
      }
    }
  }
`
