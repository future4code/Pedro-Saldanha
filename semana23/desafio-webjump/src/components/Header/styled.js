import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const HeaderContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const LogoHeader = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;

    @media (min-width: 800px) and (max-width: 1077px) {
    width:90%;
    justify-content :space-between  ;
    padding-right:24px;
    box-sizing:border-box;
  }

  /* @media (min-width: 600px) and (max-width: 799px) {
    width:100px;
  } */

`

export const Form = styled.form`
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap:nowrap;

`

export const SearchBar = styled.input`
    height:34px;
    width:400px;

    @media (min-width: 799px) and (max-width: 1077px) {
        width:200px;
  }

  @media (min-width: 0px) and (max-width: 799px) {
    display:none;
  }

`

export const SearchButton = styled.button`
    background-color:${primaryColor};
    text-transform:uppercase;
    font-weight: 800;
    color:white;
    
    border: none;
    padding:10px 16px 10px 16px;
    

    
    
    &:hover {
        color:#9c9c9c;
        cursor: pointer;
    }
`
