import styled from "styled-components";
export const Projects = styled.div`
  .container h1 {
    margin: 2rem 8rem 2rem 8rem ;
            padding: 1rem;
            text-align: center;
            background: ${props => props.theme.colors.secundary};
            border-radius: 1rem;
}
.pages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
    .section {
        height: 17.5rem;
        width: 100%;
        padding: 2rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
`;