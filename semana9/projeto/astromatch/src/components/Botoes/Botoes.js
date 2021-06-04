import React from "react";
import IconButton from '@material-ui/core/IconButton';
import {RejectClearIcon, LoveFavoriteIcon, FlexBox} from './Styled';
import axios from 'axios'


function Botoes(props) {

    const chooseMatch = (id) => {
        const body = {
            "id": id,
            "choice": true
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/choose-person', body)
            .then(() => {
                props.getProfile()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const chooseReject = (id) => {
        const body = {
            "id": id,
            "choice": false
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/choose-person', body)
            .then(() => {
                props.getProfile()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    return (
        <FlexBox>
            <IconButton onClick={() => chooseReject(props.profile.profile.id)}>
                <RejectClearIcon fontSize="large" />
            </IconButton>

            <IconButton onClick={() => chooseMatch(props.profile.profile.id)}>
                <LoveFavoriteIcon fontSize="large" />
            </IconButton>
        </FlexBox>
    );
}

export default Botoes;
