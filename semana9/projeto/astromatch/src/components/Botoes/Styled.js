import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const LoveFavoriteIcon = styled(FavoriteIcon)`
    color:#4CAF50;
`
export const RejectClearIcon = styled(ClearIcon)`
    color:#ed3636;
`


export const FlexBox = styled.div`
    display:flex;
    justify-content: space-around;
    width:100%;
    margin-bottom:16px;
    box-sizing:border-box;
`