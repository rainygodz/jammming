import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import OpenPlaylistBtn from './components/OpenPlaylistBtn';
import './App.css';
import Playlist from './components/Playlist';


function App() {
  const [ search, setSearch ] = useState('');
  const [ playlistVisibility, setPlaylistVisibility ] = useState(false);

  const handlePlaylistVisibility = () => {
    setPlaylistVisibility(!playlistVisibility);
  }

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1 className="logo">Jammming</h1>
      </header>
      <SearchBar handleInput={handleInput} value={search}/>
      <div>{search}</div>
      <SearchResults />
      <OpenPlaylistBtn handlePlaylistVisibility={handlePlaylistVisibility} />
      {/* <Playlist playlistVisibility={playlistVisibility} /> */}
    </div>
  );
}

export default App;
