import React from "react";

import { BsBoxArrowUpRight, BsPlug } from "react-icons/bs";
import Link from 'next/link';
import {Container, Content} from './styles';

interface Props { 
    toggleTheme(): void;
}

export const Header: React.FC<Props> = ({toggleTheme}) => {
   
    return (
        <Container>
            <header>
                    <div className="container">
                        <h1>Felipe Marques</h1>
                        <span>Desenvolvedor web / Júnior</span>                        
                    </div> 
                
                <Content>
                
                    <nav>
                    <ul>
                        <li>
                            <button onClick={toggleTheme}><BsPlug /></button>
                        </li>
                        <Link href="/" passHref>
                            <li><a>Home</a></li>
                        
                        </Link>                       
                        <Link href="/portifolio" passHref>
                            <li><a>Portifólio</a></li>                        
                        </Link>
                        
                        <li>
                            <a href="https://github.com/feliippeee" target="_blank" rel="noopener noreferrer">GitHub <BsBoxArrowUpRight /></a>
                        </li>
                        
                       
                    </ul>
                    </nav>
                </Content>
            </header>
        </Container>
        
    )
}
