import React from "react";
import Box from '@material-ui/core/Box';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Button from '@material-ui/core/Button';
import axios from "axios";


function LimpaMatches(props) {

    const limparMatches = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/clear')
            .then(() => {
                
                alert('Hora de procurar novos matches')
                props.getMatches()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Box>

            <Button
                variant="outlined"
                color="secondary"
                startIcon={<ClearAllIcon />}
                onClick={limparMatches}
            >
                Limpar matches

            </Button>

        </Box>
    );
}

export default LimpaMatches;
