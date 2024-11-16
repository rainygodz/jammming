import React from 'react';
import styles from '../styles/Track.module.css';
import trackCover from '../assets/images/albmcvr.png';

const Track = ({ num, trackObj, handleTrackAction, toRemove }) => {

  function convertMillisecondsToMinutes(milliseconds) {
    const time = new Date(milliseconds);
    const minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (seconds < 10) {
      seconds = '0'+seconds;
    }

    const formattedTime = `${minutes}:${seconds}`;

    return formattedTime;
  }

  const artists = [];
  trackObj.artists.forEach(artist => artists.push(artist.name));
  
  const track = trackObj.name;
  const artist = artists.join(', ');
  const album = trackObj.album.name;
  const duration = convertMillisecondsToMinutes(trackObj.duration_ms);

  return (
    <div className={styles.trackRow}>
        <div className={styles.id}>{num}</div>
        <div className={styles.trackInfo}>
          {/* <img className={styles.albumCover} src={trackCover} /> поменять на albumCover когда буду тестить api */}
          <div>
            <div className={styles.trackName}>{track}</div>
            <div className={styles.artist}>{artist}</div>
          </div>
        </div>
        <div>{album}</div>
        <div className={styles.addRemoveBtn} onClick={() => handleTrackAction(trackObj)}>
          <a href="#" >
            {toRemove? 
            <svg  width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <g id="Edit / Remove_Minus_Circle"> 
                  <path id="Vector" d="M8 12H16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                </g> 
              </g>
            </svg> 
            : 
            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#b3b3b3"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#b3b3b3"></path>
              </g>
            </svg>
            }

          </a>
        </div>
        <div>{duration}</div>
    </div>
  );
};

export default Track;