import React, { useState, useEffect } from "react";
import {StyledContainerMatches, MainContainer, LargeAvatar, ListOverflow} from './Styled'
import { makeStyles } from '@material-ui/core/styles';
import Header from "../components/Header/Header";
import axios from "axios";
import LimpaMatches from "../components/LimpaMatches/LimpaMatches";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


function TelaMatches() {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/matches")
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert(err.data)
            })
    }

    useEffect(() => {
        getMatches()

    }, [])

    const classes = useStyles();

    return (

        <MainContainer>
            <StyledContainerMatches >
                <Header />

                {matches.length ? (
                    <ListOverflow>
                        {matches.map((match) => {
                            return <ListItem>
                                <ListItemAvatar>
                                    <LargeAvatar src={match.photo} alt="user pic" className={classes.large} />
                                </ListItemAvatar>
                                <ListItemText primary={match.name} />
                            </ListItem>
                        })}
                    </ListOverflow>
                ) :
                    (<ListOverflow>
                        <ListItem>
                            <ListItemText primary={'Tente mais um pouco, o match perfeito já vem'} />
                        </ListItem>

                    </ListOverflow>
                    )}


            </StyledContainerMatches>
            <LimpaMatches
                getMatches={getMatches}
            />
        </MainContainer>

    );
}

export default TelaMatches;
