import React from "react";
import {StyledPeopleIcon, StyledBox} from './Styled'
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import astromatch from '../../img/astromatch.png';
  
  

function Header() {
  return (
    <StyledBox>
      <Link to="/"><img src={astromatch} alt={"logo"} /></Link>
      <Link to="/matches"><IconButton><StyledPeopleIcon fontSize="large"/></IconButton></Link>
    </StyledBox>
  );
}

export default Header;
