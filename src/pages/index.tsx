import React from "react"
import { graphql } from "gatsby"
import Card from "../components/Card"
import { Container } from "./styles"

export default function Home({ data: { allMdx } }) {
  const { nodes } = allMdx

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

export const Head = () => {
  return <title>Meus skills </title>
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
