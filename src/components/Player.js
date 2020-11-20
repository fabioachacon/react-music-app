import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlay, 
    faAngleLeft, 
    faAngleRight,
    faPause      
} from '@fortawesome/free-solid-svg-icons';
import {getTime} from '../util';

const Player = ({ 
    currentSong, 
    isPlaying, 
    setIsPlaying,
    setCurrentSong, 
    audioRef, 
    songs,
    setSongs }) => {

    //States
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
    });

    //Event Handlers
    const playSongHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying)
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const timeUpdateHandler =  (e) => {
      const current =  e.target.currentTime;
      const duration =  e.target.duration;
      const roundedCurrent = Math.round(current);
      const roundedDuration = Math.round(duration);
      const currentPercentage = Math.round((roundedCurrent / roundedDuration) * 100);

      setSongInfo({...songInfo, 
        currentTime: current, 
        duration: duration, 
        animationPercentage: currentPercentage});
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward'){
           await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
           activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }else if(direction === 'skip-back'){
            if(typeof currentIndex === 'number' && !currentIndex){
                currentIndex = songs.length - 1;
                await setCurrentSong(songs[currentIndex]);
                activeLibraryHandler(songs[currentIndex]);
                if (isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }
        if (isPlaying) audioRef.current.play();
    }

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        let song = songs[(currentIndex + 1) % songs.length];
        await setCurrentSong(song);
        activeLibraryHandler(song);
        if (isPlaying) audioRef.current.play();
    }

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((state) => {
            if(state.id === nextPrev.id) {
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
    }

    //Add Styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    //JSX
    return (
        <div className="player-container">
          <div className="time-control">
              <p>{getTime(songInfo.currentTime)}</p>
              <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                <input 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type='range'  
                />
                <div style={trackAnim} className="animate-track"></div>
              </div>
              <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
          </div>
          <div className="play-control">
             <FontAwesomeIcon
             onClick={() => skipTrackHandler('skip-back')} 
             className='skip-back' 
             size='2x' 
             icon={faAngleLeft} />
             <FontAwesomeIcon 
             onClick={playSongHandler} 
             className='play' 
             size='2x' 
             icon={isPlaying ? faPause : faPlay} />
             <FontAwesomeIcon 
             onClick={() => skipTrackHandler('skip-forward')} 
             className='skip-forward' 
             size='2x' 
             icon={faAngleRight} />
          </div>
          <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songEndHandler}
          ref={audioRef} 
          src={currentSong.audio}
          ></audio>
        </div>
    )
}

export default Player;