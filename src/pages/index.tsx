import type { NextPage } from 'next'
import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'


import { Main } from '../components/Main'
import React from 'react'
import { Footer } from '../components/Footer'
const Home: NextPage = () => {
  return (
    <>  
      <Head>
        <title>Felipe Marques</title>
      </Head>   
      <Header />
      <Main />
      <Footer />      
    </>
  )
}

export default Home
