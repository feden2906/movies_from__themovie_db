import { Button } from "@material-ui/core";

import styles from './Preview.module.css';

export const Preview = ({ setStart }) => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h1>Щоб побачити source code мого проекту потрібно пройти невелике тестування. <br/> Це займе менше 2-х хвилин</h1>
          <Button onClick={() => setStart(true)} variant="outlined" color="secondary">Start</Button>
        </div>
      </div>
  );
}
