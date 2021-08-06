import styles from './Questions.module.css';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";
import { useState } from "react";

export const Questions = () => {
  const [formState, setFormState] = useState({
    answer1: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    input1: '',
    answer6: '',
  });

  console.log(formState)

  const handleChange = ({target: {value, name}}) => setFormState({ ...formState, [name]: value });
  const handleCheckbox = ({target: {checked, name }}) => setFormState({ ...formState, [name]: checked });

  return (
      <div className={styles.wrapper}>
        <h1>LOREM</h1>

        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="answer1" value={formState.answer1} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio/>} label="Female" />
            <FormControlLabel value="male" control={<Radio/>} label="Male" />
            <FormControlLabel value="other" control={<Radio/>} label="Other" />
          </RadioGroup>

          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={formState.checkbox1} onChange={handleCheckbox} name="checkbox1" />} label="Gilad Gray"/>
            <FormControlLabel control={<Checkbox checked={formState.checkbox2} onChange={handleCheckbox} name="checkbox2" />} label="Jason Killian"/>
            <FormControlLabel control={<Checkbox checked={formState.checkbox3} onChange={handleCheckbox} name="checkbox3" />} label="Antoine Llorca"/>
          </FormGroup>

          <FormLabel component="legend">Assign </FormLabel>
          <TextField onChange={handleChange} value={formState.input1} name="input1" label="Outlined" variant="outlined" />
        </FormControl>

        {/*/!*{ TODO && <a href="https://www.google.com/">Link</a>}*!/*/}

      </div>
  );
}
