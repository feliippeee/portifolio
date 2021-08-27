import {Projects} from './styles';
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Portifólio() {
    return (
        <Projects>
            <div className='container'>
                <div>
                    <h1>Projetos no Ar</h1>
                </div>
            <div className='pages'>
                <div className='section'>
                    <img src="dev.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>

                <div className='section'>
                <img src="letmeask_create_room.png" alt="" />    
                    <div>Projeto em react, firebase, auth, typescript</div>
                    <div>ir para o site </div>
                </div>

                <div className='section'>
                    <img src="dev.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>

                <div className='section'>
                <img src="letmeask_create_room.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>

                <div className='section'>
                    <img src="dev.png" alt="" />    
                    <div>Projeto em react</div>
                    <div><a href="https://ignews-phi.vercel.app/" target="_blank"> ir para o site <BsBoxArrowUpRight /></a></div>
                </div>

                <div className='section'>
                <img src="letmeask_create_room.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>
            </div>              
            
        </div>
         <div className='container'>
            <div>
                 <h1>Outros Projetos</h1>
            </div>
         <div className='pages'>
             <div className='section'>
                 <img src="dev.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>

             <div className='section'>
             <img src="letmeask_create_room.png" alt="" />    
                 <div>Projeto em react, firebase, auth, typescript</div>
                 <div>ir para o site</div>
             </div>

             <div className='section'>
                 <img src="dev.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>

             <div className='section'>
             <img src="letmeask_create_room.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>

             <div className='section'>
                 <img src="dev.png" alt="" />    
                 <div>Projeto em react</div>
                 <div><a href="https://ignews-phi.vercel.app/" target="_blank"> ir para o site </a></div>
             </div>

             <div className='section'>
             <img src="letmeask_create_room.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>
         </div>              
        
         
     </div>
     </Projects>
    ) ;
}