import React from "react"
import { Link } from "gatsby"
import { ContainerNotFound } from "./styles"
import { WrapBack } from "../templates/styles"

export default function NotFound() {
  return (
    <ContainerNotFound>
      <WrapBack>
        <Link to="/">Voltar</Link>
      </WrapBack>
      <h1>Ops nao existe !</h1>
    </ContainerNotFound>
  )
}
