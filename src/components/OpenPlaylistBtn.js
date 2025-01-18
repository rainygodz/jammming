/* eslint-disable */
import React from 'react';
import styles from '../styles/OpenPlaylistBtn.module.css';

const OpenPlaylistBtn = (props) => {
  return (
    <a className={styles.fixedButton} href="#" onClick={props.onClick}>
      <div className={styles.roundedFixedBtn}>
        <div>&#9834;</div>
      </div>
    </a>
  );
};

export default OpenPlaylistBtn;