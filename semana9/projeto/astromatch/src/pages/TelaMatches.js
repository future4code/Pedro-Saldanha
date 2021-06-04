import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Box from '@material-ui/core/Box';
import axios from "axios";
import LimpaMatches from "../components/LimpaMatches";


function TelaMatches() {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/matches")
            .then((res) => {
                setMatches(res.data.matches)
                // console.log(matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getMatches()

    }, [])

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Header />

            {matches.length ? (
                    <ul>
                        {matches.map((match) => {
                            return <li>
                                <img src={match.photo} />
                                <p>{match.name}</p>
                            </li>
                        })}
                    </ul>
            ) :
                (<p>Tente mais um pouco, o match perfeito já vem</p>)}
                
            <LimpaMatches 
                getMatches={getMatches}
            />
        </Box>
    );
}

export default TelaMatches;
