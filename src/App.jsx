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
import QnAcontent from './Components/QnAcontent'
import PlexBlog from './Components/PlexBlog';

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
      <QnAcontent/>
      <PlexBlog/>
    </>
  )
}
export default App