import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  
  div {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    align-items: space-between;
    width: 250px;
  }
  input {
    padding: 4px;
    margin: 8px;
  }
  button {
    height: 50px;
  }
`

class App extends React.Component {
  state = {
    usuarios: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "laís",
        fotoUsuario: "https://picsum.photos/70/70",
        fotoPost: "https://picsum.photos/400/350"
      },
      {
        nomeUsuario: "amandinha",
        fotoUsuario: "https://picsum.photos/60/60",
        fotoPost: "https://picsum.photos/300/250"
      },
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novosPosts = [novoPost, ...this.state.usuarios]
    this.setState({ usuarios: novosPosts, valorInputFotoPost: "", valorInputFotoUsuario: "", valorInputNomeUsuario: "" })

  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })

  }

  render() {
    const postsUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
        />)
    })

    return (
      <MainContainer>
        <FormContainer>
          <div>
            <input
              value={this.state.valorInputNomeUsuario}
              placeholder={"Nome de Usuário"}
              onChange={this.onChangeInputNomeUsuario}
            />
            <input
              value={this.state.valorInputFotoUsuario}
              placeholder={"Foto de perfil"}
              onChange={this.onChangeInputFotoUsuario}
            />
            <input
              value={this.state.valorInputFotoPost}
              placeholder={"Enviar foto"}
              onChange={this.onChangeInputFotoPost}
            />
          </div>

          <button onClick={this.adicionaPost}>Adicionar Post</button>
        </FormContainer>



        <div>{postsUsuarios}</div>
      </MainContainer>
    );
  }
}

export default App;
