import styled from "styled-components"

export const Container = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9em;
  line-height: 2.5em;
  font-weight: 300;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`
