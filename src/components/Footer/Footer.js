import styles from './Footer.module.css';
import { useSelector } from "react-redux";

export const Footer = () => {
  const { theme } = useSelector(({theme}) => theme);

    return (
        <div className={`${styles.footer} ${theme ? styles.dark : styles.white}`}>
          footer
        </div>
    );
}
