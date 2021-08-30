import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import type { AppProps } from 'next/app';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import  {Header} from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
  <ThemeProvider theme={theme}>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
    </Head>
  <GlobalStyle />    
    <Header toggleTheme={toggleTheme} /> 
    <Component {...pageProps} />   
    <Footer />
    
  </ThemeProvider>
  )
}
export default MyApp
