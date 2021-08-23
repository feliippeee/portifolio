import { SiGithub, SiGmail, SiPagekit } from "react-icons/si";
import Link from 'next/link';
import styles from './styles.module.scss';//import {Container, Content} from './styles';
export function Header() {
    return (
        
        <header className={styles.container}>
                <div className={styles.profile}>
                    <div>
                        <h1>Felipe Marques</h1>
                        <span>Desenvolvedor web / Júnior</span>                        
                    </div> 
                </div>
        
                
                    <nav>
                    <ul>
                        <Link href="/">
                            <li><a>Home</a></li>
                        
                        </Link>                       
                        <Link href="/portifolio">
                            <li><a>Portifólio</a></li>                        
                        </Link>
                        <li><a href="https://github.com/feliippeee" target="_blank">GitHub</a></li>
                    </ul>
                    </nav>
        </header>
        
    )
}