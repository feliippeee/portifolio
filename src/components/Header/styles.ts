import styled from "styled-components";

export const Container = styled.header`
background-color: blue;
width: 100%;
height: 150px;

header {

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .containerName {
       span {
           color: white;
       }
    }
}
`;

export const Content = styled.div`
    background: red;
    align-items: center;
    nav {
        ul {
            list-style: none;
            display: flex;
            li {
                margin-left: 1rem;
            }
        }
    }
`;
