import React from  'react';
import LibrarySong from './LibrarySong';
import {motion} from 'framer-motion';
import { slidSideBar } from '../animations'

const Library = ({
    songs, 
    setCurrentSong, 
    setIsPlaying, 
    audioRef, 
    isPlaying, 
    setSongs, 
    libraryStatus 
}) => {
    

    // className={`library ${libraryStatus ? 'active-library' : ''}`
    return (
        <motion.div variants={slidSideBar} initial={false} animate={libraryStatus ? 'open' : 'closed'} className='library'>
           <h2>Library</h2>
           <motion.div className="library-songs">
               {songs.map((song) => <LibrarySong
               libraryStatus={libraryStatus}
               songs={songs}
               setSongs={setSongs}
               audioRef={audioRef}
               setIsPlaying={setIsPlaying}
               isPlaying={isPlaying} 
               setCurrentSong={setCurrentSong}
               song={song}
               key={song.id}
               />)}
           </motion.div>
        </motion.div>
    );
}


export default Library;