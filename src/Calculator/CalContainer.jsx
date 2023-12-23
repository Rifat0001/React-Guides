
import Display from './Display';
import ButtonContain from './ButtonContain';
import styles from './Calculator.module.css'
import { useState } from 'react';
const CalContainer = () => {
    const [display, setDisplay] = useState('');
    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
    const buttonClick = (number) => {
        if(number === 'C'){
            setDisplay('')
        }
    else if(number === '='){
            const result = eval(display);
            setDisplay(result)
        }
        else{
            console.log(`${number} is clicked`)
            const newNum = number;
            const Update = display + newNum;
            setDisplay(Update)
        }
       
    }
    return (
        <div className={styles.containCal}>
            <p className=''>Rifat Calculator</p>
            <Display display={display} ></Display>
            <ButtonContain buttonClick={buttonClick} buttons={buttons} ></ButtonContain>
        </div>
    );
};

export default CalContainer;