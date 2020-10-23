import App, { Container } from 'next/app'
import  {ThemeProvider} from 'styled-components';
import GlobalStyle from '../src/styles/global.styles';
import theme from '../src/styles/theme';


export default class MyApp extends App {
    
    render() {
      const { Component, pageProps } = this.props;
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      );
    }
  }


