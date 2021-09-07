import styled from "styled-components";
export const Dash = styled.div`
    .dash {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;
}
    .about1 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 1.5rem;
    padding: 2rem;
    h2 {
        font-size: 2rem;
        text-align: center;
        padding: 1rem;
        background: ${props => props.theme.colors.primary};
        border-radius: 1rem;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        list-style: none;
        padding: 1rem;
        li {
            display: flex;
            text-decoration: none;
            background:${props => props.theme.colors.primary};
            padding: 1.5rem;
            text-align: center;
            border-radius: 1rem;
            
        }
        > li {
            margin-top: 1rem;
        }
    }
}
.about {
    justify-content: center;
    align-self: center;
    padding: 1rem;
    margin: 1rem 1rem 2rem 1rem;    
    h2 {
        display: flex;
        justify-content: center;
        font-size: 3rem;
        padding: 1rem;
        background: ${props => props.theme.colors.primary};
        margin: 0 2rem 2rem 2rem;
        align-self: center;
        border-radius: 1rem;
        border-bottom: 1px solid white ;

    }
    
    p {
        font-size: 2rem;
        text-align: justify ;
        margin: 0 8rem 2rem 8rem;
    
    }
    h3 {
        display: flex;
        justify-content: center;               
        padding: 2rem;
        font-size: 2rem;
        
     
        
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;
        align-self: center;
        
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
           > div.images {
                padding-right: 0.725rem;
                height: 40px;
                display: flex;
                align-items: center;
            }
        }
    }
}

.image {
    margin: 0 8rem 2rem 8rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    padding: 1rem;
    border-radius: 1rem;
    img {

        width: 250px;
        height: 250px;
        border-radius: 50%;
        padding: 1rem;
    }
    .description {
        h2 {
            margin: 2rem 8rem 2rem 8rem ;
            padding: 1rem;
            text-align: center;
            background: ${props => props.theme.colors.primary};
            border-radius: 1rem;
        }
        p {
            font-size: 2rem;
            padding: 1rem 8rem 1rem 8rem;
            text-align: justify;
        }
        span {
            display: flex;
            justify-content: space-evenly;
            font-size: 1.5rem;
        }
    }
}
@media (min-width: 1080px) {
    .about {
        img {
            width: 150px;
            height: 150px;
        }
        ul {
            grid-template-columns: 1fr;
        }
    }
}

@media (max-width: 720px) {
    .about {
        h3 {            
            background: ${props => props.theme.colors.secundary};
            border-radius: 1rem;
            font-weight: 400;
        }
        ul {
            grid-template-columns: 1fr;
            li {
                font-size: 2rem;
            }
        }
    }
    .image {
        margin: 2rem 1rem 2rem 1rem;
        img {
            width: 150px;
            height: 150px;
        }
        .description {
            h2 {
                font-weight: 400;
            }
            p {
               padding: 2rem 1rem 2rem 1rem;
               font-size: 3rem;
            }
    
        } 
    }
    
}
@media (max-width: 426px) {
    .image {
        margin: 2rem 1rem 2rem 1rem;
        .description {
            p {
               padding: 1rem;
            }
    
        } 
    }
    .about1 {
      
           display: flex;
           ul {
               grid-template-columns: 1fr;
               li {
                   font-size: 2rem;
               }
           }
       }
    
}
`;