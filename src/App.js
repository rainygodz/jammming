import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  const [ search, setSearch ] = useState('');

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
    </div>
  );
}

export default App;
