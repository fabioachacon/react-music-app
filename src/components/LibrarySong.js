import React from 'react';
import {motion} from 'framer-motion';
import {slidSongs} from '../animations';

const LibrarySong = ({
    song, 
    songs, 
    setSongs, 
    setCurrentSong, 
    audioRef,
    libraryStatus, 
    isPlaying}) => {

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
        <motion.div variants={slidSongs} initial={false} animate={libraryStatus ? 'show' : 'hidden'} onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </motion.div>
    )
}


export default LibrarySong;