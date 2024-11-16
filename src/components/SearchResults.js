import React from 'react';
import Track from './Track';
import Tracklist from './Tracklist';


const SearchResults = ({ searchResults, handleTrackAction }) => {
  if (searchResults.length === 0) {
    return;
  }
  
  let trackItems = searchResults.map((track, index) => {
    return <Track 
              num={index + 1} 
              key={track.id} 
              trackObj={track}
              toRemove={false}
              handleTrackAction={handleTrackAction} />;
  });

  return (
    <Tracklist>
      {trackItems.length !== 0 
        ? trackItems
        : <div>Songs not found :(</div>
      }
    </Tracklist>
  );
};

export default SearchResults;