import styles from './ContactCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const ContactCV = () => {

  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'CONTACTS'}/>
        <div className={styles.wrapper}>
          <div>
            <b>E-mail : </b>
            <span>feden2906@gmail.com</span>
          </div>
          <div>
            <b>Phone : </b>
            <span>+38 (097) 63 22 866</span>
          </div>
          <div>
            <b>Telegram : </b>
            <span>@feden2906</span>
          </div>
          <div>
            <b>GitHub : </b>
            <span>https://github.com/feden2906</span>
          </div>
          <div>
            <b>Linkedin : </b>
            <span>https://www.linkedin.com/in/maksym-fedenko-22a5781b9</span>
          </div>
          <div>
            <b>Skype : </b>
            <span>feden2906</span>
          </div>
        </div>
      </div>
  );
}
