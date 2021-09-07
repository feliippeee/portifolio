import Image from 'next/image';
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Main } from '../components/Main'
import React from 'react'
import { Dash } from '../components/Main/styles'
import { SiNextDotJs, SiNodeDotJs, SiReact, SiTypescript } from 'react-icons/si'
type Profile = {
  name: string;
  avatar_url: string;
  location: string;
}
type RepositoriesProps = {
  profile: Profile;
}

export  const Home = ({profile}: RepositoriesProps) => {
  return (
    <>
      <Head>
        <title>Felipe Marques</title>       
      </Head>      
        <Main profile={profile} />
     </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('https://api.github.com/users/feliippeee')
    const data = await response.json();
    console.log(data);
    return { 
        props: {
            profile: data
        },
        revalidate: 60*7*24,
        
    }
  }

