import styles from './Timer.module.css';
import { useState } from "react";

export const Timer = ({ setStart, success }) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);

  if (!success) {
    (() => {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 100);
      seconds === 0 && setTimeout(() => setSeconds(59), 100);
      seconds === 0 && setTimeout(() => setMinutes(minutes - 1), 100);
      minutes === 0 && seconds === 0 && setStart(false);
    })();
  }
  return (
      <div className={styles.wrapper}>
        {minutes} : {seconds.toString().length === 1 ? '0' + seconds : seconds}
      </div>
  );
}
