import styles from './Preview.module.css';

export const Preview = ({ setStart }) => {
  return (
      <div className={styles.wrapper}>
        <h1>Lorem, Lorem,Lorem LoremvLorem Lorem Lorem LoremLorem Lorem</h1>
        <button onClick={() => setStart(true)}>Start</button>
      </div>
  );
}
