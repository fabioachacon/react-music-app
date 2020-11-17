import React, { useRef, useState } from 'react';
import './styles/app.scss';
import data from './data'
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library'
import Nav from './components/Nav';

function App() {

  //Refs Lifited from Player component
  const audioRef = useRef(null);

  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(null);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? 'library-active': ""}`}>
       <Nav 
       libraryStatus={libraryStatus}
       setLibraryStatus={setLibraryStatus} 
        />
       <Song 
         currentSong={currentSong}
         isPlaying={isPlaying}
       />
       <Player 
       currentSong={currentSong} 
       isPlaying={isPlaying} 
       setIsPlaying={setIsPlaying}
       setCurrentSong={setCurrentSong}
       audioRef={audioRef}
       songs={songs}
       setSongs={setSongs} 
       />
       <Library 
       setIsPlaying={setIsPlaying}
       songs={songs}
       setSongs={setSongs}
       audioRef={audioRef}
       isPlaying={isPlaying}
       setCurrentSong={setCurrentSong}
       libraryStatus={libraryStatus} 
       />
    </div>
  );
}

export default App;
