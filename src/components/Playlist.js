import React from 'react';
import Track from './Track';
import styles from '../styles/Playlist.module.css';

const Playlist = ({ onClose, value, handleInput }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <input type='text' placeholder='My playlist' value={value} onChange={handleInput} className={styles.playlistName} />
        <div className={styles.trackList}>
            <div className={styles.headerRow}>
              <div>#</div>
              <div>Title</div>
              <div>Album</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0,0,256,256">
                  <g fill="#b3b3b3" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><g transform="scale(8,8)"><path d="M16,4c-6.61719,0 -12,5.38281 -12,12c0,6.61719 5.38281,12 12,12c6.61719,0 12,-5.38281 12,-12c0,-6.61719 -5.38281,-12 -12,-12zM16,6c5.53516,0 10,4.46484 10,10c0,5.53516 -4.46484,10 -10,10c-5.53516,0 -10,-4.46484 -10,-10c0,-5.53516 4.46484,-10 10,-10zM15,8v9h7v-2h-5v-7z"></path></g></g>
                </svg>
              </div>
          </div>

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
        </div>
        <button className={styles.saveBtn}>Save to Spotify</button>
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};


export default Playlist;