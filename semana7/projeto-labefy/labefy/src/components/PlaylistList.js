import React from 'react';

export default class PlaylistList extends React.Component {


    render() {

        const mapPlaylists = this.props.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={()=> this.props.deletePlaylist(playlist.id)}>x</button>
                </div>
            )
        })

        return (
            <div>
                {mapPlaylists}
            </div>
        )
    }
}