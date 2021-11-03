import styled from "styled-components";


export const Nav = styled.nav`
    margin:12px;
    background-color:#E2DEDB;
    
    display:flex;  
    flex-direction:column;
    box-sizing: border-box;

`

export const NavList = styled.ul`
    list-style-position: inside;
    padding:0;
    width:240px;

`

export const NavItem = styled.li`
    letter-spacing: 0.02em;
    white-space: nowrap;
    margin-left:12px;
    margin-top:12px;
    font-size:18px;


    &:hover {
        color:#9c9c9c;
        cursor: pointer;
    }
`