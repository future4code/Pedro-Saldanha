import React from 'react';
import { createGlobalStyle } from "styled-components"
import CreatePlaylist from './components/CreatePlaylist';
import PlaylistList from './components/PlaylistList';
import axios from 'axios';
import PlaylistDetails from './components/PlaylistDetails';

const GlobalStyle = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}
`



export default class App extends React.Component {
  state = {
    playlists: []
  }

  header = {
    headers: {
      Authorization: "pedro-saldanha-paiva"
    }
  }

  componentDidMount = () => {
    this.getPlaylists()
  }

  getPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', this.header)
      .then((res) => {
        this.setState({ playlists: res.data.result.list })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  deletePlaylist = (id) => {
    if (window.confirm('Deletar playlist?')) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, this.header)
        .then(() => {
          this.getPlaylists()
        })
        .catch((err) => {
          console.log(err.response.data)
        })

    }
  }

  render() {

    return (
      <div className="App">
        <GlobalStyle />
        <CreatePlaylist
          header={this.header}
          getPlaylists={this.getPlaylists}
        />
        <hr />

        <PlaylistList
          header={this.header}
          getPlaylists={this.getPlaylists}
          playlists={this.state.playlists}
          deletePlaylist={this.deletePlaylist}
        />
        <hr/>

        <PlaylistDetails />

      </div>
    );
  }
}

