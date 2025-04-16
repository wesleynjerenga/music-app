import React from 'react';
import Player from './components/Player';
import Playlist from './components/Playlist';
import './assets/styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Music App</h1>
      <Playlist />
      <Player />
    </div>
  );
};

export default App;