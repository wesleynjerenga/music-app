import React, { useState, useRef } from 'react';

const Player = ({ currentSong }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSkip = () => {
        // Logic for skipping to the next song
    };

    return (
        <div className="player">
            <audio ref={audioRef} src={currentSong.audioUrl} />
            <h2>{currentSong.title}</h2>
            <h3>{currentSong.artist}</h3>
            <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={handleSkip}>Skip</button>
        </div>
    );
};

export default Player;