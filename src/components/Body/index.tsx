import Image from 'next/image'
import {Projects} from './styles';
import { BsBoxArrowUpRight } from "react-icons/bs";
import dev from '../../../public/dev.png';

export default function Portifólio() {
    return (
        <Projects>
            <div className='container'>
                <div>
                    <h1>Projetos no Ar</h1>
                </div>
            <div className='pages'>
                <div className='section'>
                    <Image className={'img'}
                        src="/dev.png" 
                        alt="" 
                        width="500"
                        height="300"
                        />    
                     <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>

                <div className='section'>                
                    <Image className={'img'}
                        src="/letmeask_create_room.png" 
                        alt="" 
                        width="500"
                        height="300" 
                    />                
                    <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>

                <div className='section'>
                    <Image className={'img'}
                        src="/dev.png" 
                        alt="" 
                        width="500"
                        height="300"
                        />    
                    <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>

            </div>              
            
        </div>
         <div className='container'>
            <div>
                 <h1>Outros Projetos</h1>
            </div>
         <div className='pages'>
             <div className='section'>
                 <Image className='img' 
                    src={dev} 
                    alt="" 
                    width="500"
                    height="300" />    
                 <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>
             <div className='section'>
                <Image className={'img'}
                    src="/letmeask_create_room.png" 
                    alt=""  
                    width="500"
                    height="300" 
                    />    
                  <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>

             <div className='section'>
                 <Image className={'img'} 
                    src="/dev.png" 
                    alt="" 
                    width="500"
                    height="300"
                    />    
                  <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>

             <div className='section'>
             <Image className={'img'}
                src="/letmeask_create_room.png" 
                alt="" 
                width="500"
                height="300" 
                />    
                  <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>

             <div className='section'>
                 <Image className={'img'}
                    src="/dev.png" 
                    alt="" 
                    width="500"
                    height="300" />  
                 <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url"><a href="https://ignews-phi.vercel.app/" target="_blank"  rel="noreferrer"> ir para o site </a></div>
                    </div>
                </div>



             <div className='section'>
             <Image className={'img'}
                src="/letmeask_create_room.png" 
                alt="" 
                width="500"
                height="300" 
            />    
                 <div className="nav"> 
                    <div className="projectName">Nome do Projeto</div>
                        <ul>
                            <li>Projeto em react</li>
                            <li>firebase</li>
                            <li>auth</li>
                            <li>typescript</li>
                        </ul>  
                    <div className="url">ir para o site </div>
                    </div>
                </div>
         </div>              
        
         
     </div>
     </Projects>
    ) ;
}

export const getStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/feliippeee');
    const data = await response.json();

    return {
        props: {
            repo: data,
        }
    }
};