import styled from "styled-components";

export const MainDiv = styled.div`
    position:relative;
    display:flex;
    height:10vh;
    align-items:center;
    background-color:blue;
    color:white;
`;
export const Container = styled.div`
    width:80%;
    margin:0 10%;
    display:flex;
    justify-content:space-between;
    .logout{
        cursor:pointer;
    }
`;