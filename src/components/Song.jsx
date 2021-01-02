import React from 'react';

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.name}></img>
      <h2>{currentSong.name}</h2>
      <h4>{currentSong.artist}</h4>
    </div>
  );
};

export default Song;
