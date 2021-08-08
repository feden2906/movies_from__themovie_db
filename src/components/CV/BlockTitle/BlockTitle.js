import styles from './BlockTitle.module.css';

export const BlockTitle = ({ title }) => {
  return (
      <div className={styles.wrapper}>
        {title}
      </div>
  );
}
