import React from 'react';

export default class PlaylistList extends React.Component {


    render() {

        const mapPlaylists = this.props.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>                   
                    <p>{playlist.name}</p>
                    <button onClick={()=> this.props.deletePlaylist(playlist.id)}>x</button>
                    <button onClick={()=> this.props.getPlaylistDetails(playlist.id)}>Ver detalhes</button>
                </div>
            )
        })

        return (
            <div>
                 <h3>Playlists:</h3>
                {mapPlaylists}
            </div>
        )
    }
}