import React from 'react';

const LibrarySong = ({song, songs, setSongs, setIsPlaying, setCurrentSong, audioRef, isPlaying}) => {

    // Event Handlers
    const songSelectHandler = async () => {
       await setCurrentSong(song);

        const newSongs = songs.map((state) => {
            if(state.id === song.id) {
                return {
                    ...state,
                    active: true,
                };
            }else{
                return {
                    ...state,
                    active: false
                };
            }
        });
        
        setSongs(newSongs)
        if (isPlaying) audioRef.current.play();
        
    }

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}


export default LibrarySong;