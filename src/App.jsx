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
import QnAcontent from './Components/QnAcontent';
import PlexBlog from './Components/PlexBlog';
import Footer from './Components/Footer';
import ScrollWrapper from './Components/ScrollWrapper.jsx';

function App() {
  return (
    <>
      <Navbar/>

      {/* <ScrollWrapper animation="fade-up"> */}
        <Header/>
      {/* </ScrollWrapper> */}

      {/* <ScrollWrapper animation="zoom-in" delay={200}> */}
        <MainContent/>
      {/* </ScrollWrapper> */}

      <ScrollWrapper animation="fade-left" delay={400}>
        <SaveContent/>
      </ScrollWrapper>

      <ScrollWrapper animation="fade-right" delay={600}>
        <WatchContent/>
      </ScrollWrapper>

      <ScrollWrapper animation="fade-up" delay={800}>
        <ExploreContent/>
      </ScrollWrapper>

      <ScrollWrapper animation="flip-left" delay={1000}>
        <ExtraContent/>
      </ScrollWrapper>

      <ScrollWrapper animation="fade-up" delay={1200}>
        <QnAcontent/>
      </ScrollWrapper>

      <ScrollWrapper animation="zoom-in-up" delay={1400}>
        <PlexBlog/>
      </ScrollWrapper>

      <Footer/>
    </>
  )
}

export default App
