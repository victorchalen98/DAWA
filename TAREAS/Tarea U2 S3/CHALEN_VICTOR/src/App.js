//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Tarea U2 S3</h1>
    <h2>Chalén Malo Victor Medardo</h2>
    <div className="calculadora">
      <input type="text" className="display" readOnly />
      <div className="contenedor">
        <button className='numero'>7</button>
        <button className='numero'>8</button>
        <button className='numero'>9</button>
        <button className='simbolo'>÷</button>
      </div>
      <div className="contenedor">
        <button className='numero'>4</button>
        <button className='numero'>5</button>
        <button className='numero'>6</button>
        <button className='simbolo'>x</button>
      </div>
      <div className="contenedor">
        <button className='numero'>1</button>
        <button className='numero'>2</button>
        <button className='numero'>3</button>
        <button className='simbolo'>-</button>
      </div>
      <div className="contenedor">
        <button className='numero'>0</button>
        <button className='numero'>.</button>
        <button className='igual'>=</button>
        <button className='simbolo'>+</button>
      </div>
    </div>
  </div>
  );
}

export default App;
