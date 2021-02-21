export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      console.log(123);
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    } else {
      console.log(456);
    }
  }
};
