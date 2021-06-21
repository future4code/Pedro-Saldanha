import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { useHistory } from 'react-router';
import { goToFeed, goToLogin } from '../../routes/coordinator';


const Header = () => {
    const history = useHistory()
    return (
        <AppBar color="white" position="static">
            <StyledToolbar>
                <Button color="primary" onClick={() => goToFeed(history)}>LabEddit</Button>
                <Button onClick={() => goToLogin(history)} >Login</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header