import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Home count={count} setCount={setCount}></Home>
      <Header count={count}></Header>
      <Shipment></Shipment>
    </>
  );
}

export default App;
