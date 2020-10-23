import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray};
    text-align: center;
    font-size: 1.3rem;
    line-height: ${theme.font.sizes.xlarge};
    position: relative;
    z-index: 2;
    margin-top: -${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      margin-top: -${theme.spacings.xxlarge};
      padding-bottom: ${theme.spacings.large};
    `}

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.primary};
    }
  `}
`

export const Container = styled.div`
 ${({ theme }) => css`
  /* display: inline-block; */
  flex-wrap: wrap;
  max-width: 100%;

  background: ${theme.colors.mainBg};

  /* @media (min-width: 1024px) {
    flex-wrap: nowrap;
  } */
  `}
`;

export const StyledSelect = styled.select`
  ${({ theme }) => css`
    color: 'gray';
    width: 40 em; 
    height: 13 px;
    font-family: ${theme.font.family};
    background-color: #c9cad1;
    border-radius: 3px;
    margin-left: 8px;
    appearance: none;
    ${media.lessThan('medium')`
      
    `}
  `}
`

export const MyMenuItem = styled.option`
  ${({ theme }) => css`
    color:  ${theme.colors.gray};
    width: '60rem';
  `}
`


export const SearchButton = styled.button`
  ${({ theme }) => css`
      font-size:  1em;
      font-family: ${theme.font.family};
      margin: 1em;
      padding: 0.25em 1em;
      border-radius: 3px;
      /* Color the border and text with theme.main */
      /* background: linear-gradient(45deg, #757d77 30%, #a7b0a9 90%); */
      background: #808080
  `}
`

export const ContextButton = styled.button`
  ${({ theme }) => css`
  font-family: ${theme.font.family};
  font-size: 1em;
  margin:  1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  background: #808080;

  `}
`
export const CentralizedSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`
export const FormSection = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  margin-top: 30px;
  margin-bottom: 20px; 
 
`



export const Card = styled.div`
 ${({ theme }) => css`
  font-family: ${theme.font.family};
  font-size: 1em;
  margin:  2em;
  padding: 0.25em 1em;
  border-radius: 5px;
  /* Color the border and text with theme.main */
  background: ${theme.colors.white};
  `}
`

export const FooterSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  ${media.lessThan('medium')`
    margin-top: 20%;
  `}
`