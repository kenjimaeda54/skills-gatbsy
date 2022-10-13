## Skills
[Site](https://kvm-skills.onrender.com/) com minhas habilidades 

## Motivação
Possuir uma página com descrição das minhas habilidades


## Feture
- Para renderizar e realizar o deploy de páginas com styled componentes, precisei usar o wrapRootElement no gatsby-browser e gatsby-ssr
- Criei conteúdos em MDX, abaixo esta exemplo como foi possível usar de forma programática minhas paginas
- Segui a documentação do gatbsy para criar paginas [programáticas](https://www.gatsbyjs.com/docs/how-to/routing/mdx/#programmatically-creating-pages)
- No template ira refletir o MDX então caso tenha algum código no template automaticamente reflete em qualquer um markdown
- Para navegar precisa utilizar o Link do gatbsy, outros recursos como o navigate não iram funcionar
- Se observar estou usando a propriedade path para navegar entre os markdown
- No cabeçalho de cada markdown coloquei a rota 
- Bacana de utilizar [MDX](https://mdxjs.com/) que permite importar componentes e outras funcionalidades

```typescript

//gatsby-node 
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

//templates
const path = require(`path`)

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

//card
import React, { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface CardProps {
  title: string
  navigation: string
}

export default function Card({ navigation, title }: CardProps) {
  return <Container to={navigation}>{title}</Container>
}

//MarkdownX
--- 

path: "/skill/frontend"
title: "Front end"

---
import ExternalLink from "../components/ExternalLink"



```
