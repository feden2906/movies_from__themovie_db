import styles from './Timer.module.css';
import { useState } from "react";

export const Timer = ({ setStart, success }) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);

  if (!success) {
    (() => {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      seconds === 0 && setTimeout(() => setSeconds(59), 1000);
      seconds === 0 && setTimeout(() => setMinutes(minutes - 1), 1000);
      minutes === 0 && seconds === 0 && setStart(false);
    })();
  }
  return (
      <div className={`${styles.wrapper} ${success ? styles.green : styles.red}`}>
        {minutes} : {seconds.toString().length === 1 ? '0' + seconds : seconds}
      </div>
  );
}
