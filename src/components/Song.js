import React from 'react';
import {motion} from 'framer-motion';
import {borderAnimHover} from '../animations';

const Song = ({currentSong, isPlaying}) => {
    
    return (
        <div className={`song-container ${isPlaying ? "animated-image" : ''}`}>
            <motion.img 
              whileHover={borderAnimHover}
              whileTap={borderAnimHover}
              src={currentSong.cover} 
              alt='song-cover'></motion.img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}


export default Song;