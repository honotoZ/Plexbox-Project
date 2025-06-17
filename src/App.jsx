import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <MainContent/>
    </>
  )
}
export default App