import { GetStaticProps } from "next";
import Image from "next/image";
import { SiNextDotJs, SiTypescript, SiReact, SiNodeDotJs } from "react-icons/si";
import {Dash} from './styles';
type Profile = {
    avatar_url: string;
    location: string;
}
type RepositoriesProps = {
    profile: Profile|any;
}

export function Main({profile}: RepositoriesProps) {
    return (
        <Dash>
        <div className='dash'>   
        
        <div className='about'>
            
            <h2>Olá, visitante!</h2>
            <p> 
                Criei essa página, com intuito de aprimorar meus conhecimentos e assim também usá-lo como portifólio
            </p>
            
            <h3>Bibliotecas que estou estudando:</h3> 
            <ul>
                <li>
                    <div className='images'>
                        <span><SiReact /></span>
                    </div> 
                   
                    <div>React Js</div> 
                </li>
                    
                <li>
                    <div className='images'><SiNextDotJs /></div>
                    <div>Next Js</div>
                </li>
                <li>
                    <div className='images'><SiTypescript /></div> 
                    <div>Typescript</div> 
                </li>
            </ul>

            <h3>O que pretendo aprender posteriormente:</h3>
            <ul>
            <li>
                    <div className='images'><SiReact /></div> 
                    <div>React Native</div> 
                </li>
                <li>
                    <div className='images'><SiNodeDotJs /></div> 
                    <div>Node Js</div> 
                </li>
            </ul>
        </div>    
                  
       <div className='image'>
            <div>
                <Image src={profile.avatar_url} alt="foto perfil felipe" width="500" height="300" />
            </div>

            <div className='description'>
                <h2>Um pouco sobre mim!</h2>
                <p>localização:{profile.location}</p>

                <p>Olá, me chamo Felipe, um apaixonado por tecnologia, em busca de oportunidade na àrea de desenvolvimento web.</p>
                <p>
                Atualmente sou aluno da <a href="https://rocketseat.com.br/" target="_blank" rel="noreferrer">Rocketseat</a>, onde faço parte da trilha de React, 
                absorvendo muito conteúdo</p>
                <p>
                Sempre buscando se desenvolver para aprimorar meus conhecimento.
                fiz um projeto em react native, onde tive um primeiro contato com a biblioteca, 
                Hoje estou totalmente focado no React Js, depois pretendo aprender o React native e o Node Js.
                </p>
               
            </div>
        </div> 
        
        </div>
        <div className='about1'>
        <div>
            <h2>O que estou aprendendo?</h2>
             <ul>   
                 <li>React Js</li>                 
                 <li>Next</li>
                 <li>Typescript</li>
                 <li>Styled components</li>
                 <li>Sass</li>
                 <li>Componentes</li>
                 <li>Server side render (SSR)</li>
                 <li>Single page aplication (SPA)</li>
                 <li>SSG</li>
                 <li>Consumir Api</li>
                 <li>Axios</li>
                 <li>Testes unitários</li>
             </ul>
              
        </div>
     
     </div> 
     </Dash>
        
        
    )
}
