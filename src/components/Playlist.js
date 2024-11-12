import React from 'react';
import Track from './Track';
import styles from '../styles/Playlist.module.css';
import Tracklist from './Tracklist';

const Playlist = ({ onClose, value, handleInput, tracks }) => {

  const trackItems = tracks.map((track, index) => {
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
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <input type='text' placeholder='My playlist' value={value} onChange={handleInput} className={styles.playlistName} />
        
        <Tracklist>
          {trackItems}
        </Tracklist>
        <button className={styles.saveBtn}>Save to Spotify</button>
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};


export default Playlist;