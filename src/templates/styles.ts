import styled from "styled-components"

export const Container = styled.div`
  padding: 10vh 20vw;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  blockquote {
    background: transparent;
    border-left: 3px solid #ccc;
    padding: 0em 1em;
  }

  p {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    line-height: 1.3em;
  }

  H1,
  H2,
  H3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.7em;
    font-size: 700;
  }

  .code-navigation pre {
    background-color: ${({ theme }) => theme.colors.pastel};
    border-radius: 2px;
    padding: 5px 25px;
    margin: 0.5em 0;
  }

  .language-txt {
    color: ${({ theme }) => theme.colors.gray600};
    font-size: 0.9em;
    line-height: 2.5em;
    font-weight: 500;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1em;
    font-weight: 300;
    line-height: 1.4em;
  }
  .wrap-external-link {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  li {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.9em;
    font-weight: 400;
  }

  @media screen and (max-width: 1113px) {
    padding: 10vh 2em;
  }

  @media screen and (max-width: 740px) {
    .language-txt {
      white-space: pre-wrap;
      width: min-content;
      hyphens: auto;
    }
  }

  @media screen and (max-width: 650px) {
    p {
      font-size: 0.7em;
    }

    H1,
    H2,
    H3 {
      font-size: 1em;
    }

    .code-navigation pre {
      padding: 5px 7px;
    }

    .language-txt {
      color: ${({ theme }) => theme.colors.gray600};
      font-size: 0.6em;
      font-weight: 500;
    }

    a {
      font-size: 0.7em;
    }
    li {
      font-size: 0.7em;
    }
  }
`

export const WrapBack = styled.div`
  display: flex;
  position: sticky;
  top: 30px;
  width: 100%
  z-index: 3000;
  justify-content: flex-end;
  align-items:center;
 
  a {
    text-align: center;
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.white};
    padding: 20px 0px;
    width: 90px;
    border-radius: 7px;
    font-size: 1.1em;
    font-weight: 400;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all 0.3s ease-in-out;
  }
  a:hover {
  opacity: 0.7
  }

  @media screen and (max-width: 650px) {
     font-size: 0.9em;
  }



`
