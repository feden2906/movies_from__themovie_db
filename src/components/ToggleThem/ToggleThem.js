import Switch from '@material-ui/core/Switch';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/action-creators/theme";

export const ToggleThem = () => {

  const [state, setState] = useState(true);
const dispatch = useDispatch();

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme') || 'true');
    setState(theme);
    dispatch(setTheme(theme));
  }, [dispatch]);


  const changeTheme = () => {
    localStorage.setItem('theme', JSON.stringify(!state));
    setState(!state);
    dispatch(setTheme(!state));
  }

    return (
        <div>
            <Switch
                checked={state}
                onChange={changeTheme}
                name="toggle"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div>
    );
}
