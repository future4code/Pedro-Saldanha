import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
    flex-direction:column;
    width:350px;
    margin-bottom:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

`
export const ProfilePic = styled.div`
    width:100%;
    height:456px;
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
    padding:0 10px;
    color:white;
    border-radius: 5px;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
`