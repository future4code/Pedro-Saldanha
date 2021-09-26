import styled from "styled-components";

export const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    padding:12px;

    @media (max-width: 699px){
        padding:12px;
    }
`

export const TextContainer = styled.div`
    text-align:start;
    width:32vw;
    margin-left:40px;
    color:#99AABB;

    h1, h3{
        color:#FFFFFF;
    }
    @media (max-width: 699px){
        text-align:start;
        width:80%;
        margin-left:0px;
    }
`

export const Card = styled.div`
    width:350px;
    height:520px;
    margin-bottom:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
    }
`

export const MovieImg = styled.div`
    width:100%;
    height:100%;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
`