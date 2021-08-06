import { Button } from "@material-ui/core";

import styles from './Preview.module.css';

export const Preview = ({ setStart }) => {
  return (
      <div className={styles.wrapper}>
        <h1>Lorem, Lorem,Lorem LoremvLorem Lorem Lorem LoremLorem Lorem</h1>
        <Button onClick={() => setStart(true)} variant="outlined" color="secondary">Start</Button>
      </div>
  );
}
