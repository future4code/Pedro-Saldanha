import React from 'react';
import styled from 'styled-components';
import './App.css';
import FormRecebido from './components/FormRecebido';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';

const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`


export default class App extends React.Component {
  state = {
    pagina: 1,
  }

  renderizaPagina = () => {
    if (this.state.pagina === 1) {
      return <Pagina1 />
    } else if (this.state.pagina === 2) {
      return <Pagina2 />
    }
    if (this.state.pagina === 3) {
      return <Pagina3 />
    }
    if (this.state.pagina === 4) {
      return <FormRecebido />
    }
  }

  proximaPagina = (event) => {
    return this.setState({pagina: this.state.pagina + 1}) 
  }

  render() {
    return (
      <MainContainer>
        {this.renderizaPagina()}
        <br />
        {this.state.pagina < 4 && (<button onClick={this.proximaPagina}>Próxima Etapa</button>)}
      </MainContainer>
    );
  }
}
