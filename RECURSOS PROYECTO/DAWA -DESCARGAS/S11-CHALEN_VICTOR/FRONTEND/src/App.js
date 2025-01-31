import './App.css';
import Login from './components/Login.jsx';
import Menu from './components/Menu.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
