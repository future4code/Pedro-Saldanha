import React, { useState } from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import Header from "./components/Header/Header";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton} />
        <Router setRightButton={setRightButton}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
