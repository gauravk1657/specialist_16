//   calcultors using    usrReducer function 


import React, { useReducer } from 'react';

// Initial state of the calculator
const initialState = {
  displayValue: '0',
  previousValue: null,
  operator: null,
  waitingForOperand: false,
};

// Reducer function to handle state updates
const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'APPEND':
      return {
        ...state,
        displayValue:
          state.displayValue === '0' || state.waitingForOperand
            ? action.payload
            : state.displayValue + action.payload,
        waitingForOperand: false,
      };
    case 'OPERATOR':
      return {
        ...state,
        operator: action.payload,
        previousValue: state.displayValue,
        waitingForOperand: true,
      };
    case 'CLEAR':
      return initialState;
    case 'EQUALS':
      return {
        ...state,
        displayValue: calculate(state.previousValue, state.operator, state.displayValue),
        operator: null,
        previousValue: null,
        waitingForOperand: true,
      };
    default:
      return state;
  }
};

// Helper function to perform arithmetic calculations
const calculate = (num1, operator, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      return (num1 / num2).toString();
    default:
      return '0';
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumberClick = (number) => {
    dispatch({ type: 'APPEND', payload: number });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: 'OPERATOR', payload: operator });
  };

  const handleEqualsClick = () => {
    dispatch({ type: 'EQUALS' });
  };

  const handleClearClick = () => {
    dispatch({ type: 'CLEAR' });
  };

  return (
    <div className="calculator">
      <div className="display">{state.displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleEqualsClick()}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleClearClick()}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
