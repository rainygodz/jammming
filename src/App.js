import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import OpenPlaylistBtn from './components/OpenPlaylistBtn';
import './App.css';
import Playlist from './components/Playlist';
import searchTrack from './components/searchTrack';
import SpotifyAuthRedirect from './components/SpotifyAuthRedirect';


function App() {
  const [ search, setSearch ] = useState('');
  const [ playlistVisibility, setPlaylistVisibility ] = useState(false);
  const [ playlistName, setPlaylistName ] = useState('My playlist');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
  const [ accessToken, setAccessToken ] = useState('');

  useEffect(() => {
    // Загружаем токен из localStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    searchTrack(search, accessToken)
      .then((result) => {
        if (result !== undefined) {
          setSearchResults(result);
        }
      })
      .catch((error) => console.log(error));
  };

  const handlePlaylistName = (e) => {
    if (playlistName.length === 0) {
      setPlaylistName('My playlist');
    }
    setPlaylistName(e.target.value);
  };

  const handleAddToPlaylist = (track) => {
    setPlaylistTracks((prev) => {
      return [track, ...prev];
    });
  };

  const savePlaylist = async () => {
    if (playlistTracks.length === 0) {
      alert('Плейлист пустой!');
      return false;
    }
    const trackUris = playlistTracks.map((track) => track.uri);

    try {
      // Проверяем наличие токена в состоянии
      if (!accessToken) {
        alert('Авторизация не выполнена!');
        return false;
      }
  
      // Шаг 1: Получение ID пользователя
      const userResponse = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!userResponse.ok) {
        throw new Error('Не удалось получить данные пользователя');
      }
  
      const userData = await userResponse.json();
      const userId = userData.id;
  
      // Шаг 2: Создание плейлиста
      const playlistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: playlistName || 'My Playlist',
            public: false, // Сделай плейлист приватным, если нужно
          }),
        }
      );
  
      if (!playlistResponse.ok) {
        throw new Error('Не удалось создать плейлист');
      }
  
      const playlistData = await playlistResponse.json();
      const playlistId = playlistData.id;
  
      // Шаг 3: Добавление треков в плейлист
      const addTracksResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uris: trackUris }),
        }
      );
  
      if (!addTracksResponse.ok) {
        throw new Error('Не удалось добавить треки в плейлист');
      }
  
      // Уведомление пользователя об успехе
      alert('Плейлист успешно создан!');
      setPlaylistTracks([]);
      setPlaylistName('');
      setPlaylistVisibility(false);
  
      return true;
    } catch (error) {
      console.error('Ошибка при сохранении плейлиста:', error);
      alert('Произошла ошибка при создании плейлиста. Попробуйте еще раз.');
      return false;
    }
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
      <SpotifyAuthRedirect />
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
