import React from 'react';
import axios from 'axios';

export default class CreatePlaylist extends React.Component {
    state = {
        name: ''
    }

    createNewPlaylist = () => {
        const body = {
            name: this.state.name
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, this.props.header)
            .then(() => {
                alert('Playlist criada com sucesso!')
                this.setState({ name: "" })
                this.props.getPlaylists()
            })
            .catch((err) => {
                console.log(err.response.data)
            })

    }

    handlePlaylistName = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {

        return (
            <div>
                <h2>Dê um nome a sua nova playlist:</h2>
                <input
                    placeholder={'Nova playlist'}
                    onChange={this.handlePlaylistName}
                    value={this.state.name}
                />
                <button onClick={this.createNewPlaylist}>Criar</button>
            </div>
        )
    }
}