import React from 'react';
import Track from './Track';
import styles from '../styles/Playlist.module.css';
import Tracklist from './Tracklist';

const Playlist = ({ onClose, value, handleInput }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <input type='text' placeholder='My playlist' value={value} onChange={handleInput} className={styles.playlistName} />
        
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
            albumCover="../assets/images/albmcvr.png" 
            track="YSM PC" 
            artist="OBLADAET, YASMI" 
            album="YSM PC" 
            duration="2:19" />
        </Tracklist>
        <button className={styles.saveBtn}>Save to Spotify</button>
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};


export default Playlist;