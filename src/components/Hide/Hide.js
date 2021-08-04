import React, {useState} from "react";
import styles from './Hide.module.css'

export function Hide() {

    const [hide, setHide] = useState(true)

    const clickFu = () => {
        setHide(false)
    }

    return (
        <div
            className={styles.blur}
            onClick={clickFu}
        >
            {hide &&
            <div
                className={styles.wrapper}>
                <div className={styles.first}>
                    <h2>Last update</h2>
                    <h3>Added features:</h3>
                <ul >
                    <li>select multiple genres</li>
                    <li>use search together with genres</li>
                    <li>сhange the theme</li>
                    <li>see my CV by clicking on the logo</li>
                </ul>
                    <h3>about the project:</h3>
                    <ul >
                        <li>select multiple genres</li>
                        <li>use search together with genres</li>
                        <li>сhange the theme</li>
                        <li>see my CV by clicking on the logo</li>
                    </ul>
                    <button onClick={clickFu}>click</button>
                </div>
            </div>
            }
        </div>
    );
}
