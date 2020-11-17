import React, {useEffect} from  'react';
import LibrarySong from './LibrarySong';



const Library = ({songs, setCurrentSong, setIsPlaying, audioRef, isPlaying, setSongs, libraryStatus }) => {


    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
           <h2>Library</h2>
           <div className="library-songs">
               {songs.map((song) => <LibrarySong
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
    )
}


export default Library;