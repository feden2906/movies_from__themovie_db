import { useSelector } from "react-redux";

import styles from './Footer.module.css';

export const Footer = () => {
  const { theme } = useSelector(({theme}) => theme);

    return (
        <div className={`${styles.footer} ${theme ? styles.dark : styles.white}`}>
          footer
        </div>
    );
}
