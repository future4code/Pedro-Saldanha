import React, { useState, useEffect } from "react";
import axios from 'axios'
import {StyledContainer, MainContainer} from './Styled'
import Header from "../components/Header/Header";
import TelaInicial from "./TelaInicial";
import LimpaMatches from "../components/LimpaMatches/LimpaMatches";


function App() {

  const [profile, setProfile] = useState({})

  const getProfile = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/peu-paiva/person')
      .then((res) => {
        setProfile(res.data)
      })
      .catch((err) => {
        alert(err.data)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <MainContainer>
      <StyledContainer>
        <Header />
        <TelaInicial 
          profile={profile} 
          getProfile={getProfile}
        />

      </StyledContainer>
      <LimpaMatches 
        profile={profile} 
        getProfile={getProfile}
      />
    </MainContainer>

  );
}

export default App;
