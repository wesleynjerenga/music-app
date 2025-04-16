import React from 'react';

const Playlist = ({ songs, onSelectSong }) => {
    return (
        <div className="playlist">
            <h2>Playlist</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} onClick={() => onSelectSong(song)}>
                        {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;