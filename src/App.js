import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import OpenPlaylistBtn from './components/OpenPlaylistBtn';
import './App.css';
import Playlist from './components/Playlist';


const tracks = [
  {id: "2up3OP", albumCover: "../assets/images/albmcvr.png", track: "YSM PC", artist: "OBLADAET, YASMI", album: "YSM PC", duration:"2:19"}, 
  {id: "2up33P", albumCover: "../assets/images/albmcvr.png", track: "YSM PC", artist: "OBLADAET, YASMI", album: "YSM PC", duration:"2:19"}, 
  {id: "2up35P", albumCover: "../assets/images/albmcvr.png", track: "YSM PC", artist: "OBLADAET, YASMI", album: "YSM PC", duration:"2:19"}
];


function App() {
  const [ search, setSearch ] = useState('');
  const [ playlistVisibility, setPlaylistVisibility ] = useState(false);
  const [ playlistName, setPlaylistName ] = useState('');
  const [ searchResults, setSearchResults ] = useState(tracks);
  const [ playlistTracks, setPlaylistTracks ] = useState(tracks);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1 className="logo">Jammming</h1>
      </header>
      <SearchBar handleInput={handleInput} value={search}/>
      <div>{search}</div>
      <SearchResults searchResults={searchResults} />
      <OpenPlaylistBtn onClick={() => setPlaylistVisibility(true)} />
      {playlistVisibility && (
      <Playlist onClose={() => setPlaylistVisibility(false)} handleInput={handlePlaylistName} value={playlistName} tracks={playlistTracks} />
      )}
    </div>
  );
}

export default App;
