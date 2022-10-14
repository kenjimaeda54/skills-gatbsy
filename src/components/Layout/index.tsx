import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../global/theme"
import GlobalStyles from "../../global/global-styles"
import ExternalLink from "../ExternalLink"
import { Container, WrapCode } from "./styles"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  )
}
