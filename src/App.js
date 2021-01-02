import React, { useState } from 'react';
// import styles
import './styles/app.css';
// Adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
// Import data
import data from './data.js';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
