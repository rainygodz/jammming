import React from 'react';
import Track from './Track';
import Tracklist from './Tracklist';


const SearchResults = () => {
  return (
    <Tracklist>
      <Track
        id="1" 
        albumCover="../assets/images/albmcvr.png" 
        track="YSM PC" 
        artist="OBLADAET, YASMI" 
        album="YSM PC" 
        duration="2:19" />

      <Track
        id="1" 
        track="YSM PC" 
        artist="OBLADAET, YASMI" 
        album="YSM PC" 
        duration="2:19" />

      <Track
        id="1" 
        track="YSM PC" 
        artist="OBLADAET, YASMI" 
        album="YSM PC" 
        duration="2:19" />
    </Tracklist>
  );
};

export default SearchResults;