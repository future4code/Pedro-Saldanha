import styled from 'styled-components';
import PeopleIcon from '@material-ui/icons/People';

export const StyledPeopleIcon = styled(PeopleIcon)`
    color: #762D93;
`
export const StyledBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing:border-box;
    width:100%;
    height:12%;
    border-bottom:solid 1px #7C7C7C;
    
    img{
        width:200px;
        box-sizing:border-box;
    }
`