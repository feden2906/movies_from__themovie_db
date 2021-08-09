import styles from './ContactCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const ContactCV = () => {

  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'CONTACTS'}/>
        <div className={styles.wrapper}>
          <div>
            <b>E-mail : </b>
            <a target="_blank" href='mailto:feden2906@gmail.com'>feden2906@gmail.com</a>
          </div>
          <div>
            <b>Phone : </b>
            <span>+38 (097) 63 22 866</span>
          </div>
          <div>
            <b>Telegram : </b>
            <a target="_blank" href='https://t.me/feden2906'>@feden2906</a>
          </div>
          <div>
            <b>GitHub : </b>
            <a target="_blank" href='https://github.com/feden2906'>https://github.com/feden2906</a>
          </div>
          <div>
            <b>Linkedin : </b>
            <a target="_blank" href='https://www.linkedin.com/in/maksym-fedenko-22a5781b9'>https://www.linkedin.com/in/maksym-fedenko-22a5781b9</a>
          </div>
          <div>
            <b>Skype : </b>
            <span>feden2906</span>
          </div>
        </div>
      </div>
  );
}
