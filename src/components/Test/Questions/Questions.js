import styles from './Questions.module.css';
import {
  Button,
  Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField
} from "@material-ui/core";
import { useState } from "react";

export const Questions = ({ setSuccess, success }) => {
  const [formState, setFormState] = useState({
    answer1: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    answer2: '',
    input1: '',
    answer6: '',
  });

  const exampleAnswers = {
    answer1: 'Максим',
    checkbox1: true,
    checkbox2: true,
    checkbox3: false,
    checkbox4: true,
    answer2: 'Каріна',
    input1: '',
    answer6: '',
  }


  const handleChange = ({ target: { value, name } }) => setFormState({ ...formState, [name]: value });
  const handleCheckbox = ({ target: { checked, name } }) => setFormState({ ...formState, [name]: checked });

  const submit = () => {
    for (const key in formState) {
      if (formState[key] !== exampleAnswers[key]) {
        setSuccess(false);
        break;
      }
      setSuccess(true);
    }
  }

  return (
      <div className={`${styles.wrapper} ${success ? styles.green : styles.red}`}>
        <h1>My test for you</h1>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Хто найкращий ментор в OktenWeb?</FormLabel>
            <RadioGroup aria-label="mentor"
                        name="answer1"
                        value={formState.answer1}
                        onChange={handleChange}>
              <FormControlLabel value="Віктор"
                                disabled={success}
                                control={<Radio/>}
                                label="Віктор"/>
              <FormControlLabel value="Сергій"
                                disabled={success}
                                control={<Radio/>}
                                label="Сергій"/>
              <FormControlLabel value="Юрій"
                                disabled={success}
                                control={<Radio/>}
                                label="Юрій"/>
              <FormControlLabel value="Максим"
                                disabled={success}
                                control={<Radio/>}
                                label="Максим"/>
              <FormControlLabel value="Інша відповідь"
                                disabled={success}
                                control={<Radio/>}
                                label="Інша відповідь"/>
            </RadioGroup>

            <hr/>

            <FormLabel component="legend">Що робити у випадку коли виникли запитання? (декілька вірних відповітей)</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox color={'secondary'}
                                                   disabled={success}
                                                   checked={formState.checkbox1}
                                                   onChange={handleCheckbox}
                                                   name="checkbox1"/>}
                                label="Задити питання колезі"/>
              <FormControlLabel control={<Checkbox color={'secondary'}
                                                   disabled={success}
                                                   checked={formState.checkbox2}
                                                   onChange={handleCheckbox}
                                                   name="checkbox2"/>}
                                label="Запитати в когось біля метро"/>
              <FormControlLabel control={<Checkbox color={'secondary'}
                                                   disabled={success}
                                                   checked={formState.checkbox3}
                                                   onChange={handleCheckbox}
                                                   name="checkbox3"/>}
                                label="Задати питання ментору"/>
              <FormControlLabel control={<Checkbox color={'secondary'}
                                                   disabled={success}
                                                   checked={formState.checkbox4}
                                                   onChange={handleCheckbox}
                                                   name="checkbox4"/>}
                                label="читати доку і самостійно розбиратися"/>
            </FormGroup>

            <hr/>

            <FormLabel component="legend">Як звати Віктора дівчину?</FormLabel>
            <RadioGroup aria-label="gender"
                        name="answer2"
                        value={formState.answer2}
                        onChange={handleChange}>
              <FormControlLabel value="Тамара"
                                disabled={success}
                                control={<Radio/>}
                                label="Тамара"/>
              <FormControlLabel value="Ольга"
                                disabled={success}
                                control={<Radio/>}
                                label="Ольга"/>
              <FormControlLabel value="Каріна"
                                disabled={success}
                                control={<Radio/>}
                                label="Каріна"/>
              <FormControlLabel value="Надія"
                                disabled={success}
                                control={<Radio/>}
                                label="Надія"/>
              <FormControlLabel value="Інша відповідь"
                                disabled={success}
                                control={<Radio/>}
                                label="Інша відповідь"/>
            </RadioGroup>


            {/*<FormLabel component="legend">Що робити у випадку коли виниклизапитання?</FormLabel>*/}
            {/*<TextField onChange={handleChange} value={formState.input1} name="input1" label="Outlined" variant="outlined"/>*/}

            {!success && <Button onClick={submit} variant="outlined" color="primary">Submit</Button>}
          </FormControl>
        </div>
        <div className={styles.linkToGitHub}>
          {success && <a href="https://www.google.com/"><i>Show source code my project</i></a>}
        </div>
      </div>
  );
}
