import React from 'react';
import styled from 'styled-components';
import './App.css';
import FormRecebido from './components/FormRecebido';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';

const MainContainer = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`


export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Pagina1 />
        <Pagina2 />
        <Pagina3 />
        <FormRecebido />
      </MainContainer>
    );
  }
}
