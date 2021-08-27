import styled from "styled-components";
export const Footers = styled.div`
  .footer {
    background: ${props => props.theme.colors.primary};
    display: flex;
    height: 80px;
    margin-bottom: 0;
    align-items: center;
    
        ul {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            li {
                display: flex;
                align-items: center;
                align-self: center;
                list-style: none;
                font-size: 2rem;
                padding: 1rem;
                &:hover {
                    background: ${props => props.theme.colors.secundary};
                    border-radius: 1rem
                }
                > span {
                    margin-right: 1rem;
                }
                a {
                    font-size: 2rem;
                }
               
            }
        }
    

}  
`;