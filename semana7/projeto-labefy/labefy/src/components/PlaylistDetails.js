import React from 'react';
import axios from 'axios';

export default class PlaylistDetails extends React.Component {


    render() {
        const mapTracks = this.props.tracks.map((track) => {
            return <div key={track.id}>
                <p>{track.name}</p>
                <p>{track.artist}</p>
                <audio controls="controls">
                    <source src={track.url} type="audio/mp3" />
                </audio>
            </div>
        })
        return (

            <div>
                <h3>Detalhes:</h3>
                {mapTracks}
            </div>
        )
    }
}