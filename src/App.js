import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';
export const CategoryContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  return (
    <CategoryContext.Provider value={count}>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
