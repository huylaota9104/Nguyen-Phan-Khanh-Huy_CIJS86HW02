import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Title from './components/Title';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
            <MainContent>
                <Title />
                <Sidebar />
            </MainContent>
            <Content />
            <Footer />
      </div>
    </div>
  );
}

export default App;
