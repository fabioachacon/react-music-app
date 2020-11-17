import React from 'react';

const Song = ({currentSong, isPlaying}) => {

    return (
        <div className={`song-container ${isPlaying ? "animated-image" : ''}`}>
            <img src={currentSong.cover} alt=''></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}


export default Song;