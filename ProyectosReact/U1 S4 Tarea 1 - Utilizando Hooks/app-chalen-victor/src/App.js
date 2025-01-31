import { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState(''); 
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
 
  const handleNumberClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleOperatorClick = (op) => {
    if (displayValue === '') return; 
    if (previousValue === null) {
      setPreviousValue(displayValue); 
    } else if (operator) {
      const result = calculate(); 
      setPreviousValue(result);
      setDisplayValue(result.toString());
    }
    setDisplayValue(''); 
    setOperator(op); 
  };

  const calculate = () => {
    const current = parseFloat(displayValue);
    const previous = parseFloat(previousValue);
    if (isNaN(current) || isNaN(previous)) return '';

    let result;
    switch (operator) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case 'x':
        result = previous * current;
        break;
      case '÷':
        result = previous / current;
        break;
      default:
        return '';
    }
    return result;
  };

  const handleEqualClick = () => {
    if (!operator || previousValue === null) return;
    const result = calculate();
    setDisplayValue(result.toString());
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="App">
      <h1>U1 S4 Tarea 1</h1>
      <h2>Chalén Malo Victor Medardo</h2>
      <div className="calculadora">
        <input type="text" className="display" value={displayValue} readOnly />
        <div className="contenedor">
          <button className="numero" onClick={() => handleNumberClick('7')}>7</button>
          <button className="numero" onClick={() => handleNumberClick('8')}>8</button>
          <button className="numero" onClick={() => handleNumberClick('9')}>9</button>
          <button className="simbolo" onClick={() => handleOperatorClick('÷')}>÷</button>
        </div>
        <div className="contenedor">
          <button className="numero" onClick={() => handleNumberClick('4')}>4</button>
          <button className="numero" onClick={() => handleNumberClick('5')}>5</button>
          <button className="numero" onClick={() => handleNumberClick('6')}>6</button>
          <button className="simbolo" onClick={() => handleOperatorClick('x')}>x</button>
        </div>
        <div className="contenedor">
          <button className="numero" onClick={() => handleNumberClick('1')}>1</button>
          <button className="numero" onClick={() => handleNumberClick('2')}>2</button>
          <button className="numero" onClick={() => handleNumberClick('3')}>3</button>
          <button className="simbolo" onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="contenedor">
          <button className="numero" onClick={() => handleNumberClick('0')}>0</button>
          <button className="numero" onClick={() => handleNumberClick('.')}>.</button>
          <button className="igual" onClick={handleEqualClick}>=</button>
          <button className="simbolo" onClick={() => handleOperatorClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

