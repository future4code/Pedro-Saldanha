import React from "react";
import Header from "../components/Header";
import TelaInicial from "./TelaInicial";
import Box from '@material-ui/core/Box';
import LimpaMatches from "../components/LimpaMatches";


function App() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Header />
      <TelaInicial />
      <LimpaMatches />
    </Box>
  );
}

export default App;
