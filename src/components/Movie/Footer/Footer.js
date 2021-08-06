import { useSelector } from "react-redux";

import styles from './Footer.module.css';
import { Link } from "react-router-dom";

export const Footer = () => {
  const { theme } = useSelector(({theme}) => theme);

    return (
        <div className={`${styles.footer} ${theme ? styles.dark : styles.white}`}>
          <Link to="/test">TEST</Link>
        </div>
    );
}
