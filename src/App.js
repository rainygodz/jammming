import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import OpenPlaylistBtn from './components/OpenPlaylistBtn';
import './App.css';
import Playlist from './components/Playlist';
import getAccessToken from './components/getAccessToken';
import searchTrack from './components/searchTrack';


function App() {
  const [ search, setSearch ] = useState('');
  const [ playlistVisibility, setPlaylistVisibility ] = useState(false);
  const [ playlistName, setPlaylistName ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistTracks, setPlaylistTracks ] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    searchTrack(search)
      .then((result) => {
        if (result !== undefined) {
          setSearchResults(result);
        }
      })
      .catch((error) => console.log(error));
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
        .then((token, expiresIn) => console.log(token, expiresIn))
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
      <SearchResults searchResults={searchResults} handleTrackAction={handleAddToPlaylist} />
      <OpenPlaylistBtn onClick={() => setPlaylistVisibility(true)} />
      {playlistVisibility && (
      <Playlist onClose={() => setPlaylistVisibility(false)} handleInput={handlePlaylistName} value={playlistName} tracks={playlistTracks} handleTrackAction={handleRemoveFromPlaylist} savePlaylist={savePlaylist} />
      )}
    </div>
  );
}

export default App;
