import styles from './Questions.module.css';
import {
  Button,
  Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField
} from "@material-ui/core";
import { useEffect, useState } from "react";

export const Questions = ({ setSuccess, success }) => {
  const [valid, setValid] = useState(false);
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

  const submit = () => {
    for (const key in formState) {
      if (formState[key] !== exampleAnswers[key]) {
        setValid(false);
        break;
      }
      setValid(true);
    }
  }

  const handleChange = ({ target: { value, name } }) => {
    setFormState({ ...formState, [name]: value })
  }
  const handleCheckbox = ({ target: { checked, name } }) => {
    setFormState({ ...formState, [name]: checked })
  }

  useEffect(() => {
    submit();
  }, [formState, submit, valid])

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

            <FormLabel component="legend">Як звати дівчину Віктора?</FormLabel>
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

            {valid && <Button onClick={() => setSuccess(true)} variant="outlined" color="primary">Submit</Button>}
            {!valid && <Button target='_blank' href="https://www.google.com/search?q=js+%D0%B4%D0%BB%D1%8F+%D1%87%D0%B0%D0%B9%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2&client=ubuntu&hs=2kU&ei=fXMSYbS-EO6M9u8P4_KM6AE&oq=JS+%D0%B4%D0%BB%D1%8F+%D1%87%D0%B0%D0%B9%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCAAQgAQyBQgAEIAEMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjoHCAAQRxCwAzoGCAAQBxAeOggIABAHEAUQHjoECAAQDToICAAQDRAFEB5KBAhBGABQnvUOWKCYD2CLoQ9oBXACeACAAXGIAaQHkgEDMi43mAEAoAEByAEIwAEB&sclient=gws-wiz" variant="outlined" color="primary">Submit</Button>}
          </FormControl>
        </div>
        <div className={styles.linkToGitHub}>
          {success && <a target='_blank' href="https://www.google.com/"><i>Show source code my project</i></a>}
        </div>
      </div>
  );
}
