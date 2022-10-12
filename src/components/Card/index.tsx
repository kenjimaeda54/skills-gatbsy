import React, { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface CardProps {
  title: string
  navigation: string
}

export default function Card({ navigation, title }: CardProps) {
  //para dar certo navigation precisa ser anchor ,nao pode usar o navigate do gatbsy
  return <Container to={navigation}>{title}</Container>
}
