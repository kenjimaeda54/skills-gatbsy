import React, { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface CardProps {
  title: string
  navigation: string
}

export default function Card({ navigation, title }: CardProps) {
  //para dar certo precisa ser link
  return <Container to={navigation}>{title}</Container>
}
