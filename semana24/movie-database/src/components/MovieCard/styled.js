import styled from "styled-components";

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


export const TextContainer = styled.div`
    width: 100%;
    box-sizing:border-box;
    margin:0;
    padding:0 16px;
    color:#FFFFFF;
    border-radius: 5px;
    background: linear-gradient(to bottom, transparent 0%, black 80%);
`