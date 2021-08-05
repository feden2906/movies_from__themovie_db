import Switch from '@material-ui/core/Switch';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./ToggleThem.module.css";
import { setTheme } from "../../redux";

export const ToggleThem = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme') || 'false');
    setState(theme);
    dispatch(setTheme(theme));
  }, [dispatch]);

  const changeTheme = () => {
    localStorage.setItem('theme', JSON.stringify(!state));
    setState(!state);
    dispatch(setTheme(!state));
  }

  return (
      <div className={styles.wrapper}>
        <img src={state ? './sun1.png' : './sun2.png'} alt="sun icon"/>
        <Switch checked={state} onChange={changeTheme} name="toggle" color="secondary"/>
        <img src={state ? './moon1.png' : './moon2.png'} alt="sun icon"/>
        {/*<img src={state ? './cloud.png' : './sun.png'} alt="sun icon"/>*/}
        {/*<Switch checked={state} onChange={changeTheme} name="toggle" color="secondary"/>*/}
        {/*<img src={state ? './moon.png' : './cloud.png'} alt="sun icon"/>*/}
      </div>
  );
}
