import React from 'react';
import styles from '../styles/Track.module.css';
import trackCover from '../assets/images/albmcvr.png';

const Track = ({ id, albumCover, track, artist, album, duration }) => {
  return (
    <div className={styles.trackRow}>
        <div className={styles.id}>{id}</div>
        <div className={styles.trackInfo}>
          <img className={styles.albumCover} src={trackCover} />
          <div>
            <div className={styles.trackName}>{track}</div>
            <div className={styles.artist}>{artist}</div>
          </div>
        </div>
        <div>{album}</div>
        <div>{duration}</div>
    </div>
  );
};

export default Track;