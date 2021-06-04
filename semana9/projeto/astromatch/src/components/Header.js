import React from "react";
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import PeopleIcon from '@material-ui/icons/People';
import astromatch from '../img/astromatch.png'

const MyIconButton = styled(IconButton)`
    // background: '#762D93',
    // border: 0,
    // borderRadius: 50,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: #762D93;
    // height: 48,
    // width: 48,
    // padding: '0 10px',
    margin-left: 24px;
`
const StyledBox = styled(Box)`
display: flex;
justify-content: center;
align-items: center;
`

  
  

function Header() {
  return (
    <StyledBox>
      <Link to="/"><img src={astromatch} alt={"logo"} /></Link>
      <Link to="/matches"><MyIconButton color="primary" ><PeopleIcon fontSize="large"/></MyIconButton></Link>
    </StyledBox>
  );
}

export default Header;
