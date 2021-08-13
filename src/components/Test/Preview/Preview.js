import { Button } from "@material-ui/core";

import styles from './Preview.module.css';

export const Preview = ({ setStart }) => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h1>Чтобы увидеть
              source code
              моего проекта, необходимо пройти небольшое тестирование. <br/>
              Это займёт не более 2-х минут.</h1>
          <Button onClick={() => setStart(true)} variant="outlined" color="secondary">Start</Button>
        </div>
      </div>
  );
}
