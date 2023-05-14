import React from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Delivery from './component/Delivery';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Delivery></Delivery>
    </div>
  )
}

export default App;
