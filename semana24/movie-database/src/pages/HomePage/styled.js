import styled from "styled-components";

export const CardsContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;

    @media (max-width: 699px){
        padding:12px;
    }
`

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap-reverse;
`

export const StyledButton = styled.button`
    background-color: #14181C;
    border: 1px solid #2C3440;
    color: #FFFFFF;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    border-radius: 8px;
    box-sizing: border-box;
    margin-bottom: 16px;
    transition: all 200ms ease;

    &:hover{
        cursor: pointer;
        opacity:0.8;
    }

    @media (max-width: 699px){
        margin-right: 0;
        margin-top:-4px;
    }
  
`
