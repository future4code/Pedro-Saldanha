import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    } 
]
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
        <input>

        </input>

        <div>{postsUsuarios}</div>
      </MainContainer>
    );
  }
}

export default App;
