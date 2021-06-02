import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import axios from 'axios'


function TelaInicial() {
    const [profile, setProfile] = useState({})


    const getProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/person')
            .then((res) => {
                setProfile(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

        const chooseMatch = (id) => {
           const body = {
                "id": id,
                "choice": true
            }
            axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/choose-person', body)
            .then(()=>{
                getProfile()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        const chooseReject = (id) => {
            const body = {
                "id": id,
                "choice": false
            }
            axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/choose-person', body)
            .then(()=>{
                getProfile()
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div>
            {profile.profile ? (
                <>
                    <img src={profile.profile.photo} />
                    <h2>{profile.profile.name}</h2>
                    <p>{profile.profile.bio}</p>
                    <button onClick={()=> chooseReject(profile.profile.id)}>x</button>
                    <button onClick={()=> chooseMatch(profile.profile.id)}>s2</button>
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default TelaInicial;
