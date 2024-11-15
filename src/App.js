import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import OpenPlaylistBtn from './components/OpenPlaylistBtn';
import './App.css';
import Playlist from './components/Playlist';
import getAccessToken from './components/getAccessToken';


const tracks = [
  {id: "2up3OP", albumCover: "../assets/images/albmcvr.png", track: "YSM PC", artist: "OBLADAET, YASMI", album: "YSM PC", duration:"2:19", uri: "u1534"}, 
  {id: "2up33P", albumCover: "../assets/images/albmcvr.png", track: "What you know bout love", artist: "POP SMOKE", album: "WYD", duration:"2:34", uri: "u1634"}, 
  {id: "2up35P", albumCover: "../assets/images/albmcvr.png", track: "Базар", artist: "YASMI", album: "showbiz162", duration:"2:10", uri: "u1734"}
];


function App() {
  const [ search, setSearch ] = useState('');
  const [ playlistVisibility, setPlaylistVisibility ] = useState(false);
  const [ playlistName, setPlaylistName ] = useState('');
  const [ searchResults, setSearchResults ] = useState(tracks);
  const [ playlistTracks, setPlaylistTracks ] = useState([]);

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

  const savePlaylist = () => {
    const newPlaylist = [];
    if (playlistTracks.length !== 0) {
      playlistTracks.forEach(track => newPlaylist.push(track.uri));
      
      getAccessToken()
        .then((token) => console.log(token))
        .catch((error) => console.log(error));
      
      setPlaylistTracks([]);
      setPlaylistName('');
      setPlaylistVisibility(false);

      alert('Playlist created!' + newPlaylist);
      return newPlaylist;
    }
    
    alert('playlist empty');
    return false;
  }

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
      <Playlist onClose={() => setPlaylistVisibility(false)} handleInput={handlePlaylistName} value={playlistName} tracks={playlistTracks} handleTrackAction={handleRemoveFromPlaylist} savePlaylist={savePlaylist} />
      )}
    </div>
  );
}

export default App;
