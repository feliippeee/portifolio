import React, { useContext, useState } from "react";
import Switch from 'react-switch';
import { BsBoxArrowUpRight, BsPlug } from "react-icons/bs";
import Link from 'next/link';
import {Container, Content} from './styles';
import { shade } from "polished";
import { ThemeContext } from "styled-components";
import { setCookie } from "nookies";

interface Props { 
    toggleTheme(): void;
   
}

export const Header: React.FC<Props> = ({toggleTheme}) => {
   const {colors, title} = useContext(ThemeContext);
  
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
                            <Switch 
                                onChange={toggleTheme}
                                checked={title=== 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                            />
                        </li>
                        <Link href="/" passHref>
                            <li><a>Home</a></li>
                        
                        </Link>                       
                        <Link href="/portifolio" passHref>
                            <li><a>Portifólio</a></li>                        
                        </Link>
                        
                        <li>
                            <a href="https://github.com/feliippeee" target="_blank" rel="noopener noreferrer">GitHub <span><BsBoxArrowUpRight /></span></a>
                        </li>
                        
                       
                    </ul>
                    </nav>
                </Content>
            </header>
        </Container>
        
    )
}
