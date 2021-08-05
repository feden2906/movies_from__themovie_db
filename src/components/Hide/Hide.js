import React, { useEffect, useState } from "react";
import styles from './Hide.module.css'

export const Hide = () => {
  const [hide, setHide] = useState(true);

  const clickFu = () => {
    setHide(false);
    localStorage.setItem('modalState', JSON.stringify(false));
  }
  console.log(hide)
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
            <h2>Last update</h2>
            <h3>Added features:</h3>
            <ul>
              <li>select multiple genres</li>
              <li>use search together with genres</li>
              <li>сhange the theme</li>
              <li>see my CV by clicking on the logo</li>
            </ul>
            <h3>about the project:</h3>
            <ul>
              <li>select multiple genres</li>
              <li>use search together with genres</li>
              <li>сhange the theme</li>
              <li>see my CV by clicking on the logo</li>
            </ul>

            <div className={styles.btnWrapper}>
              <button className={styles.close} onClick={clickFu}>close info</button>
            </div>
          </div>
        </div>
        }
      </>
  );
}
