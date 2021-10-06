import styled from "styled-components";

export const SelectContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap-reverse;
`

export const Select = styled.select`
    background-color: #14181C;
    border: 1px solid #2C3440;
    color: #FFFFFF;
    padding: 16px ;
    font-size: 16px;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 16px;
    margin-bottom: 16px;
    transition: all 200ms ease;
    

    &:hover{
        cursor: pointer;
        opacity:0.8;
    }

    @media (max-width: 699px){
        margin-bottom: 8px;
    }
  
`
