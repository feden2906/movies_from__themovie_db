import React from "react";
import {CalculatorStyles} from "../../components";
import NumberButton from "../../components/Calculator/NumberButton";
import FunctionButton from "../../components/Calculator/FunctionButton";
import NegativeButton from "../../components/Calculator/NegativeBut";
import BackButton from "../../components/Calculator/BackButton";
import ClearButton from "../../components/Calculator/ClearButtom";
import EqualButton from "../../components/Calculator/EqualButton";
import Display from "../../components/Calculator/Display";
import NumberProvider from "../../components/Calculator/NumberProvider";

export function Calculator() {

    return (
        <NumberProvider>
            <div style={{
                backgroundColor: 'bisque',
                minHeight: "100vh",
                display: "flex",
                alignItems: "center"
            }}>
                <CalculatorStyles>
                    <div className="display">
                        <h1>myReactCalc</h1>
                        <Display/>
                    </div>
                    <div className="number-pad">
                            <ClearButton/>
                            <BackButton/>
                            <NegativeButton/>
                            <FunctionButton buttonValue="/"/>
                            <NumberButton buttonValue={7}/>
                            <NumberButton buttonValue={8}/>
                            <NumberButton buttonValue={9}/>
                            <FunctionButton buttonValue="*"/>
                            <NumberButton buttonValue={4}/>
                            <NumberButton buttonValue={5}/>
                            <NumberButton buttonValue={6}/>
                            <FunctionButton buttonValue="-"/>
                            <NumberButton buttonValue={1}/>
                            <NumberButton buttonValue={2}/>
                            <NumberButton buttonValue={3}/>
                            <FunctionButton buttonValue="+"/>
                            <div className="zero-button">
                                <NumberButton buttonValue={0}/>
                            </div>
                            <NumberButton buttonValue="."/>
                            <EqualButton/>
                    </div>
                </CalculatorStyles>
            </div>
        </NumberProvider>
    );
}
