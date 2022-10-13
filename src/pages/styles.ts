import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 517px) {
    flex-direction: column;
    gap: 50px;
  }
`

export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 1.7em;
    line-heigt: 1.9em;
    color: ${({ theme }) => theme.colors.white};
  }
`
