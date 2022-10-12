import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Container, WrapBack } from "./styles"

const shortcodes = { Link }

export default function Template({ data, children }) {
  return (
    <Container>
      <WrapBack>
        <Link to="/">Voltar</Link>
      </WrapBack>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Container>
  )
}

export const Head = ({ data: { mdx } }) => {
  const { frontmatter } = mdx
  return <title>{frontmatter.title}</title>
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        path
        title
      }
    }
  }
`
