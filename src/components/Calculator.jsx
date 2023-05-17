import './Calculator.css';
import React, { useState } from "react";
import CurrentHour from "./FormatHour"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faBattery,faWifi } from '@fortawesome/free-solid-svg-icons';
import { parse } from '@fortawesome/fontawesome-svg-core';


export  default function Calculator() {
    const [num, setNum] = useState(0);
    const [numReserv, setNumReserv] = useState();
    const [operator, setOperator] = useState();
    const [result, setResult] = useState();

    // take Input in display
    const inputNumber = (e) =>{
        e.preventDefault()
        const num2 = e.target.textContent
        if( num === 0 ){
            setNum(num2)
        }else{
            setNum( num + num2);
        }
    };

    // clear display
    const Clear = () =>{
        setNum(0)
    };
    // percentage number
    const Percentage = () =>{
        setNum(num / 100);
    };

    // Positive or negative operation
    const ToggleOperation = () =>{
        if( num > 0 ){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        } 
    };
    // setOperator
    const Operator = (e) =>{
        const operatorInput = e.target.textContent;
        setOperator(operatorInput);
        setNumReserv(num);
        setNum(0);
        /*pegar o primeiro valor e concatenar com o 

            operador e armzenar no display
         */
    };
    // Calculate area
    const Calculate = () =>{
        operator.e.target.textContent ='X'.toUpperCase();
        if (operator ==="/"){
            setNum(numReserv / num);
        };
        if (operator ==="x"){
            setNum(numReserv * num);
        };
        if (operator ==="+"){
            setNum(parseFloat(numReserv) + parseFloat(num));
        };
        if (operator ==="-"){
            setNum(numReserv - num);
        };
    }
 
    return (
        <div className="wrapper">
            <header className="header-status">
                <span className="hour"> 
                    <CurrentHour/>
                </span>
                <div className="sound-bth">
                    <div className="sound-header"></div>
                    <div className="bth"></div>
                    <div className="bth"></div>
                </div>
                <div className="icons-signals">
                    <FontAwesomeIcon icon={faSignal} />
                    <FontAwesomeIcon icon={faWifi} />
                    <FontAwesomeIcon icon={faBattery} />
                </div>
            </header>
            {/* result */}
            <div className="display">{num}</div>

            <div className="grid-container">
                <button onClick={Clear} className="btnGrey">AC</button>
                <button onClick={ToggleOperation} className="btnGrey">+/-</button>
                <button onClick={Percentage} className="btnGrey">%</button>
                <button onClick={Operator} className="btnOrange">/</button>
                <button onClick={inputNumber} className="btnNum">7</button>
                <button onClick={inputNumber} className="btnNum">8</button>
                <button onClick={inputNumber} className="btnNum">9</button>
                <button onClick={Operator} className="btnOrange">X</button>
                <button onClick={inputNumber} className="btnNum">4</button>
                <button onClick={inputNumber} className="btnNum">5</button>
                <button onClick={inputNumber} className="btnNum">6</button>
                <button onClick={Operator} className="btnOrange">-</button>
                <button onClick={inputNumber} className="btnNum">1</button>
                <button onClick={inputNumber} className="btnNum">2</button>
                <button onClick={inputNumber} className="btnNum">3</button>
                <button onClick={Operator} className="btnOrange">+</button>
                <button onClick={inputNumber} className="btnNum" id='btn0'>0</button>
                <button  className="btnNum">,</button>
                <button onClick={Calculate} className="btnOrange">=</button>
            </div> 

            <div className="sound-footer">
                <div className="sound-footer"></div>
            </div>    
        
        </div>
        
    )

}