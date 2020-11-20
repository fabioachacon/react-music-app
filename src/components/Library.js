import React from  'react';
import LibrarySong from './LibrarySong';
import {motion} from 'framer-motion';
import {slidSideBar, slidSongs} from '../animations'

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
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
           <h2>Library</h2>
           <div className="library-songs">
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
           </div>
        </div>
    );
}


export default Library;