import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const Nav = styled.nav`
    display:flex;
    background-color: ${primaryColor};
    justify-content: center;
    min-height:64px;
    align-items:center;
    width:100%;
    box-sizing:border-box;

    @media (min-width: 800px) and (max-width: 1077px) {
    width:100%;
    
  }

  @media  (max-width: 799px) {
    width:100vw;
    justify-content: flex-start;
    
  }



`

export const NavList = styled.div`
    display:flex;
    justify-content:flex-start;
    width:80%;
    list-style-type: none;
    margin-left:24px;
    box-sizing:border-box;

    /* @media (min-width: 500px) and (max-width: 799px) {
    justify-content:space-between;
  } */

    @media (max-width: 500px) {
    flex-direction:column;
    justify-content:space-between;
  }




    
`

export const NavItem = styled.li`
    margin-right:80px;
    text-transform:uppercase;
    font-weight: 800;
    color:white;
    letter-spacing: 0.02em;
    white-space: nowrap;

    /* @media (min-width: 500px) and (max-width: 1077px) {
    width:100%;
    margin-right:auto;
    box-sizing:border-box;
    margin-left:0;
  } */
    
    &:hover {
        color:#9c9c9c;
        cursor: pointer;
    }
`