import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import SaveContent from './Components/SaveContent';
import WatchContent from './Components/WatchContent';
import ExploreContent from './Components/ExploreContent';
import ExtraContent from './Components/ExtraContent';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <MainContent/>
      <SaveContent/>
      <WatchContent/>
      <ExploreContent/>
      <ExtraContent/>
    </>
  )
}
export default App