import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </>
  );
}

export default App;
