import styled from "styled-components";

export const Container = styled.header`

background: ${props => props.theme.colors.background};


header {
background: ${props => props.theme.colors.primary};
width: 100%;
height: 6.25rem;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1rem;
    .container {
        display: flex;
        flex-direction: column;
       span {
        justify-content: center;
        display: flex;
        font-weight: 600;
        background: ${props => props.theme.colors.background};
        border-radius: 1rem;
       }
    }
}
`;

export const Content = styled.div`
   display: flex;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    nav {
    ul {
        display: flex;
        list-style: none;
        align-self: center;
        align-items: center;
        li {
            padding-left: 1rem;
            cursor: pointer;   
                 
           
            a {
                display: flex;
                color: white;
                font-size: 2rem;
                padding: 1rem;
                font-weight: 900;

                &:hover {
                    background: ${props => props.theme.colors.secundary};
                    border-radius: 1rem
                }
                .svg {
                display: flex;
                align-items:center;
                }
            }
        }
    }
}
@media (min-width: 1080px) {
   
}

@media (max-width: 720px) {
    
}
`;
