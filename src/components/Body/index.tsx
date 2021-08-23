import styles from './styles.module.scss';
export default function Portifólio() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1>Projetos no Ar</h1>
                </div>
            <div className={styles.pages}>
                <div className={styles.section}>
                    <img src="dev.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>

                <div className={styles.section}>
                <img src="letmeask_create_room.png" alt="" />    
                    <div>Projeto em react, firebase, auth, typescript</div>
                    <div>ir para o site</div>
                </div>

                <div className={styles.section}>
                    <img src="dev.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>

                <div className={styles.section}>
                <img src="letmeask_create_room.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>

                <div className={styles.section}>
                    <img src="dev.png" alt="" />    
                    <div>Projeto em react</div>
                    <div><a href="https://ignews-phi.vercel.app/" target="_blank"> ir para o site </a></div>
                </div>

                <div className={styles.section}>
                <img src="letmeask_create_room.png" alt="" />    
                    <div>Projeto em react</div>
                    <div>ir para o site</div>
                </div>
            </div>              
            
        </div>
         <div className={styles.container}>
            <div>
                 <h1>Outros Projetos</h1>
            </div>
         <div className={styles.pages}>
             <div className={styles.section}>
                 <img src="dev.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>

             <div className={styles.section}>
             <img src="letmeask_create_room.png" alt="" />    
                 <div>Projeto em react, firebase, auth, typescript</div>
                 <div>ir para o site</div>
             </div>

             <div className={styles.section}>
                 <img src="dev.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>

             <div className={styles.section}>
             <img src="letmeask_create_room.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>

             <div className={styles.section}>
                 <img src="dev.png" alt="" />    
                 <div>Projeto em react</div>
                 <div><a href="https://ignews-phi.vercel.app/" target="_blank"> ir para o site </a></div>
             </div>

             <div className={styles.section}>
             <img src="letmeask_create_room.png" alt="" />    
                 <div>Projeto em react</div>
                 <div>ir para o site</div>
             </div>
         </div>              
        
         
     </div>
     </>
    ) ;
}