import styled from "styled-components";

export const Container = styled.header`
height: 100px;
background: ${props => props.theme.colors.background};
width: 100%;
height: 150px;


header {
background: ${props => props.theme.colors.primary};
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1rem;
    .container {
       span {
          
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
            }
        }
    }
}
`;
