import { GetServerSideProps, GetStaticProps } from "next";
import Image from 'next/image';
import axios from "axios";
import Head from "next/head";
import React from "react";
import { Projects } from "../components/Body/styles";
type Data = {  
    id: number;  
    name: string;
    image: string;
    url: string;    
    languages: [];

}   

type DataProps = {
repos: Data[];


}
export default function Portifolio({repos}:DataProps) {
    return (
        <>  
        <Head>
            <title>Portifólio</title>
        </Head>            
        
        <Projects>
            <div className='container'>
                <div>
                    <h1>Projetos no Ar</h1>
                </div>
            <div className='pages'>
              {repos.map(repo => (
                    <div key={repo.id} className='section'>
                    <Image className={'img'}
                        src={repo.image} 
                        alt={repo.name}
                        width="500"
                        height="300"
                        />    
                     <div className="nav"> 
                    <div className="projectName">{repo.name}</div>
                        <ul>
                            {repo.languages.map(repo => (

                                <li key={repo}>{repo}</li>

                            ))}
                        </ul>  
                    <div className="url"><a href={repo.url} target="_blank"  rel="noreferrer"> ir para o site </a> </div>
                    </div>
                </div>
              ))}

            
            </div>              
            
                 
     </div>
     </Projects>
        
        </>
    ) ;
}

export const getServerSideProps: GetServerSideProps = async() => {
    const res = await axios.get('https://portifolio1-feliippeee.vercel.app/api/hello')
    const data = await res.data

//const api = Api()
return { 
    props: {
         repos: data,
    },
            
}
}



