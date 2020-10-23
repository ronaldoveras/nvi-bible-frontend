import { createGlobalStyle, css} from 'styled-components'
import media from 'styled-media-query'

const GlobalStyle = createGlobalStyle`
/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Poppins Light'), local('Poppins-Light'),
       url('/fonts/poppins-v13-latin-300.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
}

/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Poppins Regular'), local('Poppins-Regular'),
       url('/fonts/poppins-v13-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
}

/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
       url('/fonts/poppins-v13-latin-600.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
}


  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
    }
    html, body, div, #__next {
      height: 100%
      font-family: ${theme.font.family};
    }

    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.medium};
      ${media.lessThan('medium')`
         font-size: ${theme.font.sizes.xsmall};
    	`}  
      font-family: ${theme.font.family}, ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `}
`

export default GlobalStyle
