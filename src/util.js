export const playAudio = (isPlaying, audioRef) =>{
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        console.log(playPromise);
        if (playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play();
            })
            .catch(error => console.log(error))
        }
    }
}

export const getTime = (time) => {
        let minutes = Math.floor(time  / 60);
        let seconds =  ("0" + Math.floor(time % 60)).slice(-2);
        let currentTime = [minutes, seconds].join(':');
        return currentTime;
}