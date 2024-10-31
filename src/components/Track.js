import React from 'react';
import styles from '../styles/Track.module.css';

const Track = ({ id, track, album, duration }) => {
  return (
    <div className={styles.trackRow}>
        <div>{id}</div>
        <div>{track}</div>
        <div>{album}</div>
        <div>{duration}</div>
    </div>
  );
};

export default Track;