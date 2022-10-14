import React from "react"
import { graphql } from "gatsby"
import Card from "../components/Card"
import { Container, WrapLink } from "../styles-home/styles"
import ExternalLink from "../components/ExternalLink"

export default function Home({ data: { allMdx } }) {
  const { nodes } = allMdx

  return (
    <Container>
      <WrapLink>
        <ExternalLink
          title="Codigo fonte"
          href="https://github.com/kenjimaeda54/skills-gatsby"
          style={{
            textDecoration: "none",
          }}
        />
      </WrapLink>
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
