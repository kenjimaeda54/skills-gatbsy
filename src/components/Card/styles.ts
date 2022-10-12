import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.colors.gray400};
  padding: 20px;
  border-radius: 7px;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  color: ${({ theme }) => theme.colors.white};
  font-size: 19px;
  font-weight: 600;
  text-decoration: none;
`
