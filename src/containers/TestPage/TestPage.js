import { useState } from "react";

import styles from './TestPage.module.css';
import { Preview, Questions, Timer } from "../../components";

export const TestPage = () => {
  const [start, setStart] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
      <div className={`${styles.wrapper} ${success ? styles.green : styles.red}`}>
        { !start && <Preview setStart={setStart}/> }
        { start && <Timer setStart={setStart} success={success}/> }

        { start && <Questions setSuccess={setSuccess} success={success}/> }
      </div>
  );
}
