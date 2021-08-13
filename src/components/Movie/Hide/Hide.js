import React, { useEffect, useState } from "react";
import styles from './Hide.module.css'

export const Hide = () => {
  const [hide, setHide] = useState(true);

  const clickFu = () => {
    setHide(false);
    localStorage.setItem('modalState', JSON.stringify(false));
  }

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem('modalState'));
    if (resp === null) setHide(true);
    if (resp === false) setHide(false);
  }, [])

  if (hide) {
    window.addEventListener('scroll', (e) => {
      e.preventDefault();
    })
  }
  return (
      <>
        {hide &&
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <h2 className={styles.second}>Last update</h2>
            <br/>
            <h3>Added features:</h3>
            <ul>
              <li  className={styles.info}>select multiple genres</li>
              <li  className={styles.info}>сhange the theme</li>
              <li  className={styles.info}>video player in the movie card</li>
              <li  className={styles.info}>my CV by clicking on the logo</li>
            </ul>
            <h3>About the project:</h3>
            <div  className={styles.info}>
              ❗ If you want to see the code of the project, use the Test at the bottom of the page)  ❗
            </div>

            <div className={styles.btnWrapper}>
              <button className={styles.close} onClick={clickFu}>close info</button>
            </div>
          </div>
        </div>
        }
      </>
  );
}
