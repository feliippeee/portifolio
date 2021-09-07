import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import usePersistedState from '../utils/usePersistedState';
import { GlobalStyle } from '../styles/globals';
import type { AppProps } from 'next/app';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import  {Header} from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  
  const [theme, setTheme] = useState( light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
  <ThemeProvider theme={theme}>
    
  <GlobalStyle />    
    <Header toggleTheme={toggleTheme} /> 
    <Component {...pageProps} />   
    <Footer />
    
  </ThemeProvider>
  )
}
export default MyApp
