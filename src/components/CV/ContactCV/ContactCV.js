import styles from './ContactCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const ContactCV = () => {

  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'CONTACTS'}/>
        <div className={styles.wrapper}>
          <div>
            <b>E-mail : </b>
            <a target="_blank" href='mailto:alex988andr@gmail.com'>alex988andr@gmail.com</a>
          </div>
          <div>
            <b>Phone : </b>
            <span>+38 (073) 020 12 85</span>
          </div>
          <div>
            <b>Telegram : </b>
            <a target="_blank" href='https://t.me/Ander988'>@Ander988</a>
          </div>
          <div>
            <b>GitHub : </b>
            <a target="_blank" href='https://github.com/AlexandrKhom'>https://github.com/AlexandrKhom</a>
          </div>
          {/*<div>*/}
          {/*  <b>Linkedin : </b>*/}
          {/*  <a target="_blank" href='https://www.linkedin.com/in/maksym-fedenko-22a5781b9'>https://www.linkedin.com/in/maksym-fedenko-22a5781b9</a>*/}
          {/*</div>*/}
          <div>
            <b>Skype : </b>
            <span>alex7work</span>
          </div>
        </div>
      </div>
  );
}
