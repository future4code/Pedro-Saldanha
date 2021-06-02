import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import axios from 'axios'


function TelaInicial() {
    const [profile, setProfile] = useState({})


    const getProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/person')
        .then((res)=>{
            setProfile(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getProfile()
    }, [])

  return (
    <div>
        <img src={profile.profile.photo} />
        <h2>{profile.profile.name}</h2>
        <p>{profile.profile.bio}</p>
    </div>
  );
}

export default TelaInicial;
