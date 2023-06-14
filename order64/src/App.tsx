import React from 'react';
import './scss/App.css';
import HeaderComponent from './components/HeaderComponent';
import MainContentComponent from './components/MainContentComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <MainContentComponent />
      <FooterComponent />
    </>
  );
}

export default App;
