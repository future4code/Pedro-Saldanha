import styled from "styled-components";
import { primaryColor } from "../../constants/colors";
import { secondaryColor } from "../../constants/colors";
import { borderColor } from "../../constants/colors";

export const Card = styled.div`
    margin:12px;
    width:180px;
    height:400px;
    
    display:flex;  
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    box-sizing: border-box;

`

export const Img = styled.img`
    width:100%;
    height:50%;
    border:2px solid ${borderColor};
    
`

export const PriceText = styled.p`
    font-size:24px;
    margin:auto;
    font-weight: 800;
    color:${primaryColor};
    
`

export const NameText = styled.p`
    font-size:18px;
    text-transform:uppercase;
    color:#9c9c9c;
    text-align:center;
    
`

export const Button = styled.button`
    background-color:${secondaryColor};
    text-transform:uppercase;
    font-weight: 800;
    font-size:16px;
    color:white;
    letter-spacing: 0.02em;
    width:100%;
    border: none;
    padding:12px;
    border-radius:6px;
    
    
    &:hover {
        color:${primaryColor};
        cursor: pointer;
    }
`