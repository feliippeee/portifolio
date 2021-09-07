import Image from 'next/image'
import {Projects} from './styles';
import { BsBoxArrowUpRight } from "react-icons/bs";
import dev from '../../../public/dev.png';
import { GetServerSideProps, GetStaticProps } from 'next';

type Data = {    
    name: string;
    image: string;
    url: string;    
    languages: [];

}   

type DataProps = {
repos: Data[];

}

export default function Portifólio({repos}:DataProps) {
    return (
        <Projects>
            <div className='container'>
                <div>
                    <h1>Projetos no Ar</h1>
                </div>
            <div className='pages'>
              {repos.map(repo => (
                    <div key={repo.name} className='section'>
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
    ) ;
}

