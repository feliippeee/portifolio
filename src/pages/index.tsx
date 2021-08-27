import type { NextPage } from 'next'
import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'


import { Main } from '../components/Main'
import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
const Home: NextPage = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <>
      <Head>
        <title>Felipe Marques</title>
      </Head>  
      
      <Main />
    
    </>
  )
}

export default Home
