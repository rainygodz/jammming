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

const playlistTracksArr = [
  {id: "2up3OP", albumCover: "../assets/images/albmcvr.png", track: "YSM PC", artist: "OBLADAET, YASMI", album: "YSM PC", duration:"2:19"}, 
  {id: "2up33P", albumCover: "../assets/images/albmcvr.png", track: "YSM PC", artist: "OBLADAET, YASMI", album: "YSM PC", duration:"2:19"}, 
  {id: "2up35P", albumCover: "../assets/images/albmcvr.png", track: "YSM PC", artist: "OBLADAET, YASMI", album: "YSM PC", duration:"2:19"}
];


function App() {
  const [ search, setSearch ] = useState('');
  const [ playlistVisibility, setPlaylistVisibility ] = useState(false);
  const [ playlistName, setPlaylistName ] = useState('');
  const [ searchResults, setSearchResults ] = useState(tracks);
  const [ playlistTracks, setPlaylistTracks ] = useState(playlistTracksArr);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleAddToPlaylist = (track) => {
    setPlaylistTracks((prev) => {
      return [track, ...prev];
    });
  };

  const handleRemoveFromPlaylist = (track) => {
    setPlaylistTracks((prev) => {
      return prev.filter(t => t.id !== track.id);
    });
  };

  return (
    <div className="App">
      <header>
        <h1 className="logo">Jammming</h1>
      </header>
      <SearchBar handleInput={handleInput} value={search}/>
      <div>{search}</div>
      <SearchResults searchResults={searchResults} handleTrackAction={handleAddToPlaylist} />
      <OpenPlaylistBtn onClick={() => setPlaylistVisibility(true)} />
      {playlistVisibility && (
      <Playlist onClose={() => setPlaylistVisibility(false)} handleInput={handlePlaylistName} value={playlistName} tracks={playlistTracks} handleTrackAction={handleRemoveFromPlaylist} />
      )}
    </div>
  );
}

export default App;
