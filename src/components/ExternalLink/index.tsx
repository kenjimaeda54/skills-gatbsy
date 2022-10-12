import React, { AnchorHTMLAttributes } from "react"
import { Container } from "./styles"

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLElement> {
  title: string
  strong?: string
}

export default function ExternalLink({
  title,
  strong = null,
  ...rest
}: ExternalLinkProps) {
  return (
    <Container {...rest} target="_blank">
      {title}
      {``}
      {strong && <strong> {strong} </strong>}
    </Container>
  )
}
