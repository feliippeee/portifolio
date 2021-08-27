import React, {useContext} from "react";
import Switch from 'react-switch';

import { SiGithub, SiGmail, SiPagekit } from "react-icons/si";
import { BsBoxArrowUpRight, BsPlug } from "react-icons/bs";
import Link from 'next/link';
//import styles from './styles.module.scss';
import {ThemeContext} from 'styled-components';
import {shade} from 'polished';
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
                        <li ><button onClick={toggleTheme}> <BsPlug /></button></li>
                        <Link href="/">
                            <li><a>Home</a></li>
                        
                        </Link>                       
                        <Link href="/portifolio">
                            <li><a>Portifólio</a></li>                        
                        </Link>
                        <li><a href="https://github.com/feliippeee" target="_blank">GitHub <BsBoxArrowUpRight /></a></li>
                    </ul>
                    </nav>
                </Content>
            </header>
        </Container>
        
    )
}