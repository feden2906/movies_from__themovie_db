import styles from './Questions.module.css';
import {
    Button,
    Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField
} from "@material-ui/core";
import {useEffect, useState} from "react";

export const Questions = ({setSuccess, success}) => {
    const [valid, setValid] = useState(false);
    const [formState, setFormState] = useState({
        answer1: '',
        answer2: '',
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        input1: '',
        input2: '',
    });

    const exampleAnswers = {
        answer1: '111',
        answer2: 'Alex',
        checkbox1: true,
        checkbox2: true,
        checkbox3: true,
        checkbox4: false,
        checkbox5: true,
        checkbox6: true,
        checkbox7: false,
        checkbox8: false,
        input1: '8',
        input2: '0',
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


    const handleChange = ({target: {value, name}}) => setFormState({...formState, [name]: value});

    const handleCheckbox = ({target: {checked, name}}) => setFormState({...formState, [name]: checked});


    useEffect(() => {
        submit();
    }, [formState, submit, valid]);


    return (
        <div className={`${styles.wrapper} ${styles.notForCopy} ${success ? styles.green : styles.red}`}>
            <h1>My test for you</h1>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                        <div className={styles.qsize}>1️⃣ Чему равно a + b + c?</div>
                    </FormLabel>
                    <div className={styles.qsize2}>let a = 1; <br/>
                        {"let b = { toString() {return '1'} }"};<br/>
                        let c = 1;
                    </div>
                    <br/>
                    <RadioGroup aria-label="mentor"
                                name="answer1"
                                value={formState.answer1}
                                onChange={handleChange}>
                        <FormControlLabel value="undefined"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="undefined"/>
                        <FormControlLabel value="11[object Object]"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="11[object Object]"/>
                        <FormControlLabel value="2[object Object]"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="2[object Object]"/>
                        <FormControlLabel value="111"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="111"/>
                        <FormControlLabel value="3"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="3"/>
                    </RadioGroup>

                  <hr/>

                    <FormLabel component="legend">
                        <div className={styles.qsize}>2️⃣ Что выведет sayHi при вызове через setTimeout?</div>
                    </FormLabel>
                    <div className={styles.qsize2}>{'let name = "Alex";'} <br/>
                        {`function sayHi() {`} <br/>
                        {`alert(name)`} <br/>
                        {'}'}<br/>

                        {`setTimeout(function () {`} <br/>
                        {` let name = "Max";`} <br/>
                        {`  sayHi();`} <br/>
                        {`}, 1000);`}</div>
                    <br/>
                    <RadioGroup aria-label="mentor"
                                name="answer2"
                                value={formState.answer2}
                                onChange={handleChange}>
                        <FormControlLabel value="Max"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="Max"/>
                        <FormControlLabel value="ошибка"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="Будет ошибка"/>
                        <FormControlLabel value="Hello"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="Hello"/>
                        <FormControlLabel value="Alex"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="Alex"/>
                        <FormControlLabel value="Другой ответ"
                                          disabled={success}
                                          control={<Radio color="primary"/>}
                                          label="Другой ответ"/>
                    </RadioGroup>

                    <hr/>

                    <FormLabel component="legend">
                        <div className={styles.qsize}>
                            3️⃣ Какие вызовы parseInt возвратят число? (возможны несколько вариантов)
                        </div>
                    </FormLabel>
                    <br/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox1}
                                                             onChange={handleCheckbox}
                                                             name="checkbox1"/>}
                                          label="parseInt('1px')"/>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox2}
                                                             onChange={handleCheckbox}
                                                             name="checkbox2"/>}
                                          label="parseInt('-1.2')"/>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox3}
                                                             onChange={handleCheckbox}
                                                             name="checkbox3"/>}
                                          label="parseInt('0 минут')"/>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox4}
                                                             onChange={handleCheckbox}
                                                             name="checkbox4"/>}
                                          label="parseInt('$1.2')"/>
                    </FormGroup>

                    <hr/>

                    <FormLabel component="legend">
                        <div className={styles.qsize}>4️⃣ Какой код корректно найдёт максимальное значение в непустом
                            массиве arr? (возможны несколько вариантов)
                        </div>
                    </FormLabel>
                    <br/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox5}
                                                             onChange={handleCheckbox}
                                                             name="checkbox5"/>}
                                          label="arr.reduce(function(prev, item) { return Math.max(prev, item) })"/>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox6}
                                                             onChange={handleCheckbox}
                                                             name="checkbox6"/>}
                                          label="Math.max.apply(null, arr)"/>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox7}
                                                             onChange={handleCheckbox}
                                                             name="checkbox7"/>}
                                          label="Math.max(arr)"/>
                        <FormControlLabel control={<Checkbox color={'primary'}
                                                             disabled={success}
                                                             checked={formState.checkbox8}
                                                             onChange={handleCheckbox}
                                                             name="checkbox8"/>}
                                          label="arr.findMax()"/>
                    </FormGroup>

                    <hr/>

                    <div className={styles.qsize}>5️⃣ Что выведет: alert((1,5-1)*2)</div>
                    <TextField onChange={handleChange} value={formState.input1} name="input1" label="Outlined"
                               variant="outlined"/>
                    <br/>
                    <div className={styles.qsize}>6️⃣ Чему равно 2 && 1 && 0 && null && undefined && 5 ?</div>
                    <TextField onChange={handleChange} value={formState.input2} name="input2" label="Outlined"
                               variant="outlined"/>
                    <br/>
                    <br/>

                    {valid &&
                    <Button onClick={() => setSuccess(true)} variant="outlined" color="primary">Submit</Button>}
                    {!valid && <Button target='_blank'
                                       href="https://www.google.com/search?q=%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B+javascript&rlz=1C1SQJL_ruUA851UA851&sxsrf=ALeKk03dn88XtkLulqURBWfVLGWTIOrIcw%3A1628792767082&ei=v2cVYbeoBO_97_UPy66d0AU&oq=jcyj+javascript&gs_lcp=Cgdnd3Mtd2l6EAEYADIECAAQDTIECAAQDTIECAAQDTIECAAQDTIGCAAQDRAeMggIABANEAUQHjIICAAQCBANEB4yCAgAEAgQDRAeMggIABAIEA0QHjIICAAQCBANEB46BwgjELADECc6BwgAEEcQsAM6BAgjECc6BAgAEEM6BggAEAcQHkoECEEYAFCxDViSIWCWNWgBcAJ4AIABuQGIAYEGkgEDMy4zmAEAoAEByAEKwAEB&sclient=gws-wiz"
                                       variant="outlined" color="primary">Submit</Button>}
                </FormControl>
            </div>
            <div className={styles.linkToGitHub}>
                {success && <a target='_blank' href="https://www.google.com/"><i>Show source code my project</i></a>}
            </div>
        </div>
    );
}
