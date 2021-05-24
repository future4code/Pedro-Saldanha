import React from 'react';
import PlaylistList from './PlaylistList';

export default class Playlists extends React.Component {


    render() {

        const mapPlaylists = this.props.playlists.map((playlist) => {
            return (
                    <PlaylistList 
                        playlistId={playlist.id}
                        playlistName={playlist.name}
                        deletePlaylist={this.props.deletePlaylist}
                        getPlaylistDetails={this.props.getPlaylistDetails}
                    />
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