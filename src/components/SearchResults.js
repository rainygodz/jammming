import React from 'react';
import Track from './Track';
import Tracklist from './Tracklist';


const SearchResults = ({ searchResults }) => {
  const trackItems = searchResults.map((track, index) => {
    return <Track 
              num={index + 1} 
              albumCover={track.albumCover} 
              track={track.track} 
              artist={track.artist} 
              album={track.album} 
              duration={track.duration} 
              id={track.id} />;
  });

  return (
    <Tracklist>
      {trackItems}
    </Tracklist>
  );
};

export default SearchResults;